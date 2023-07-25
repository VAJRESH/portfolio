/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";

export function useElementInView(callback) {
  const elementReference = useRef(null);
  const optionalElementReference = useRef(null);

  const callbackElementInSight = useCallback((node) => {
    if (elementReference.current) elementReference.current.disconnect();

    elementReference.current = new IntersectionObserver(callback);

    if (node) elementReference.current.observe(node);
  }, []);

  return [callbackElementInSight, elementReference, optionalElementReference];
}

export function useGetMouseCoordinates(elemWidth = null, elemHeight = null) {
  const elemRef = useRef(null);
  const [position, setPosition] = useState({
    x: null,
    y: null,
    overFlowX: null,
    overFlowY: null,
  });

  useEffect(() => {
    if (!elemRef?.current) return;

    const btn = elemRef?.current;
    btn?.addEventListener("mousemove", mouseMoveEvent);

    return () => btn?.removeEventListener("mousemove", mouseMoveEvent);
  }, [elemRef, elemHeight, elemWidth]);

  function mouseMoveEvent(e) {
    const { x, y } = elemRef?.current?.getBoundingClientRect();
    let _x = e.clientX - x;
    let _y = e.clientY - y;
    const overFlow = {};
    const buffer = 10;

    if (elemWidth && e?.pageX + elemWidth + buffer >= window.innerWidth) {
      _x = _x - elemWidth - buffer;
      overFlow.overFlowX = true;
    }

    if (elemHeight && e?.pageY + elemHeight + buffer >= window.innerHeight) {
      _y = _y - elemHeight - buffer;
      overFlow.overFlowY = true;
    }

    setPosition({ x: _x, y: _y, ...overFlow });
  }

  return { position, elemRef };
}

export function useGetWindowDimensions(callback = () => {}) {
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    function updateDimensions() {
      const _dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      setDimensions(_dimensions);
      callback(_dimensions);
    }

    // to set initial state
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
}
