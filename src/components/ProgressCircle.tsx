import {
  HTMLAttributes,
  SVGAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "../assets/styles/components/progressCircle.module.scss";
import moment from "moment";

type ProgressCircleType = HTMLAttributes<HTMLDivElement> &
  Omit<
    SVGAttributes<SVGElement>,
    "width" | "height" | "radius" | "stroke" | "spacing"
  > & {
    progress?: number;
    date: string | Date;
    width?: number;
    height?: number;
    radius?: number;
    stroke?: number;
    spacing?: number;
    className?: string;
  };

export const ProgressCircle = ({
  progress,
  date,
  width = 181,
  height = 181,
  radius = 85,
  stroke = 3,
  color = "white",
  spacing = 30,
  className = "",
  ...props
}: ProgressCircleType) => {
  const circleRef = useRef<SVGCircleElement | null>(null);
  const labelRef = useRef<SVGTSpanElement | null>(null);
  const textRef = useRef<SVGTextElement | null>(null);
  const [txtVerticalPos, setTxtVerticalPos] = useState<number>(0);
  const _progress = useMemo(() => {
    switch (true) {
      case !progress || progress < 0:
        return 0;
      case progress && progress > 100:
        return 100;
      default:
        return progress;
    }
  }, [progress]);

  useEffect(() => {
    if (circleRef && labelRef && textRef) {
      const circumference = Math.ceil(2 * Math.PI * radius);
      (
        circleRef.current as SVGCircleElement
      ).style.strokeDasharray = `${circumference}`;

      let startValue = 0;
      let offset = 0;
      let interval = 0;

      interval = setInterval(() => {
        offset = _progress ? (circumference * (1 - startValue)) / 100 : 0;
        if (startValue > _progress) {
          clearInterval(interval);
        } else {
          startValue++;
        }
        (circleRef.current as SVGCircleElement).style.strokeDashoffset = `${
          circumference + offset
        }`;
        (labelRef.current as SVGTSpanElement).textContent = `${
          startValue > _progress ? _progress : startValue
        }%`;
      }, 10);

      // get text vertical position
      const txtHeight = textRef.current?.getBBox().height;

      if (txtHeight && _progress <= 100 && _progress >= 0) {
        setTxtVerticalPos(txtHeight / 2);
      }
      return () => {
        clearInterval(interval);
      };
    }
  }, [_progress, radius]);

  return (
    <div className={className} {...props}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <filter id="drop-shadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feFlood floodColor="#ff963c" />
            <feComposite in2="offsetblur" operator="in" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.9" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          ref={circleRef}
          className={styles["progress-circle"]}
          transform="rotate(-90)"
          cx={width / 2}
          cy={height / 2}
          stroke={color}
          r={radius}
          fill="transparent"
          strokeWidth={stroke}
          filter="url(#drop-shadow)"
        />
        <text
          ref={textRef}
          className={styles["loading"]}
          fill={color}
          x={radius}
          y={radius + txtVerticalPos}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          <tspan
            dx={-spacing}
            dy={txtVerticalPos}
            x={radius}
            y={radius + txtVerticalPos}
            filter="url(#drop-shadow)"
          >
            {moment(new Date(date)).format("M/D")}
          </tspan>

          <tspan
            x={radius}
            y={radius + txtVerticalPos}
            dx={spacing}
            dy={txtVerticalPos}
            fontSize={32}
            ref={labelRef}
            filter="url(#drop-shadow)"
          ></tspan>
        </text>
      </svg>
    </div>
  );
};
