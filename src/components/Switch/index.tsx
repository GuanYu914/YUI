import React, { useEffect, useMemo, useRef, useState } from "react";

import Thumb, { THUMB_SIZE } from "./components/Thumb";
import Label from "./components/Label";

const NO_LABEL_WIDTH_MOVE_OFFSET = 20;

interface SwitchProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onClick?: (currentChecked: boolean) => void;
}

// NOTE: UI layout -> checkedChildren, thumb, unCheckedChildren
function Switch(props: SwitchProps) {
  const {
    className = "",
    checked = false,
    disabled = false,
    checkedChildren = null,
    unCheckedChildren = null,
    onClick = null,
  } = props;

  const [_checked, _setChecked] = useState(checked);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const checkedLabelRef = useRef<HTMLSpanElement>(null);
  const uncheckedLabelRef = useRef<HTMLSpanElement>(null);
  const clickBefore = useRef(false);
  const initWithOffset = useRef(false);

  const buttonClassName = useMemo(() => {
    let styles =
      "min-w-16 min-h-9 rounded-2xl px-2 py-1 overflow-hidden text-white";

    if (_checked && disabled) {
      styles = styles.concat(" bg-primary/80 cursor-not-allowed");
    }
    if (_checked && !disabled) {
      styles = styles.concat(" bg-primary");
    }
    if (!_checked && disabled) {
      styles = styles.concat(
        " bg-secondary/30 [&]:text-text/40 cursor-not-allowed",
      );
    }
    if (!_checked && !disabled) {
      styles = styles.concat(" bg-secondary");
    }

    return styles;
  }, [_checked, disabled]);

  // NOTE: 處理點擊事件，並根據開關的狀態，移動開關的位置
  const handleClick = () => {
    if (disabled) return;
    if (!wrapperRef.current) return;

    const checkedLabelWidth =
      checkedLabelRef.current?.offsetWidth ?? NO_LABEL_WIDTH_MOVE_OFFSET;
    const uncheckedLabelWidth =
      uncheckedLabelRef.current?.offsetWidth ?? NO_LABEL_WIDTH_MOVE_OFFSET;

    if (_checked && clickBefore.current) {
      if (initWithOffset.current) {
        wrapperRef.current.style.transform = `translateX(${-checkedLabelWidth}px)`;
      }
      if (!initWithOffset.current) {
        wrapperRef.current.style.transform = `translateX(0px)`;
      }
    }
    if (_checked && !clickBefore.current) {
      if (initWithOffset.current) {
        wrapperRef.current.style.transform = "translateX(0px)";
      }
      if (!initWithOffset.current) {
        wrapperRef.current.style.transform = `translateX(${-checkedLabelWidth}px)`;
      }
    }
    if (!_checked && clickBefore.current) {
      if (initWithOffset.current) {
        wrapperRef.current.style.transform = `translateX(${checkedLabelWidth}px)`;
      }
      if (!initWithOffset.current) {
        wrapperRef.current.style.transform = `translateX(0px)`;
      }
    }
    if (!_checked && !clickBefore.current) {
      if (initWithOffset.current) {
        wrapperRef.current.style.transform = `translateX(0px)`;
      }
      if (!initWithOffset.current) {
        wrapperRef.current.style.transform = `translateX(${checkedLabelWidth}px)`;
      }
    }

    if (clickBefore.current) {
      clickBefore.current = false;
    } else {
      clickBefore.current = true;
    }

    // NOTE: 執行外部傳入的 onClick 事件
    if (onClick) {
      onClick(!_checked);
    }

    _setChecked(!_checked);
    // NOTE: 根據開關的狀態，設定開關的寬度
    wrapperRef.current.style.width = `${THUMB_SIZE + (_checked ? uncheckedLabelWidth : checkedLabelWidth)}px`;
  };

  const init = () => {
    if (!wrapperRef.current) return;

    wrapperRef.current.style.transform = "translateX(0px)";
    initWithOffset.current = false;
    clickBefore.current = false;

    const checkedLabelWidth = checkedLabelRef.current?.offsetWidth ?? 0;
    const uncheckedLabelWidth = uncheckedLabelRef.current?.offsetWidth ?? 0;

    // NOTE: 如果開關打開，但沒有對應打開時的文字，則把開關往右移動
    if (_checked && checkedLabelWidth === 0) {
      initWithOffset.current = true;
      wrapperRef.current.style.transform = `translateX(${NO_LABEL_WIDTH_MOVE_OFFSET}px)`;
    }
    // NOTE: 如果開關關閉，有對應打開時的文字，則把開關往左移動打開時文字的寬度
    if (!_checked && checkedLabelWidth !== 0) {
      initWithOffset.current = true;
      wrapperRef.current.style.transform = `translateX(-${checkedLabelWidth}px)`;
    }

    // NOTE: 根據開關的狀態，設定開關的寬度
    wrapperRef.current.style.width = `${THUMB_SIZE + (_checked ? checkedLabelWidth : uncheckedLabelWidth)}px`;
  };

  useEffect(() => {
    _setChecked(checked);
  }, [checked]);

  useEffect(() => {
    init();
  }, [_checked, checkedChildren, unCheckedChildren]);

  return (
    <button
      ref={buttonRef}
      className={`${className} ${buttonClassName}`}
      onClick={handleClick}
    >
      <div
        ref={wrapperRef}
        className="flex items-center transition-all duration-300"
      >
        {checkedChildren && (
          <Label ref={checkedLabelRef} className={"pr-2"}>
            {checkedChildren}
          </Label>
        )}
        <Thumb />
        {unCheckedChildren && (
          <Label ref={uncheckedLabelRef} className={"pl-2"}>
            {unCheckedChildren}
          </Label>
        )}
      </div>
    </button>
  );
}

export default Switch;
