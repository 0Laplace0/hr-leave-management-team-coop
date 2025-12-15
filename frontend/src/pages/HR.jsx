import React, { useMemo, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FaHome } from "react-icons/fa";

import "../styles/HRCalendar.css";

const pad2 = (n) => String(n).padStart(2, "0");
const toYMD = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

export default function HRCalendarPage() {
  const calRef = useRef(null);

  const events = [];
  const todayYMD = useMemo(() => toYMD(new Date()), []);
  const todayCount = 0;

  const api = () => calRef.current?.getApi();

  const handleShowTodayLeaves = () => {
    alert("Today: no leaves");
  };

  return (
    <div className="hr-page">
      <div className="hr-topbar">
        <div className="hr-title">
            <span className="hr-title">
                <FaHome /> Human Resources
            </span>
        </div>
      </div>

      <div className="hr-row">
        <div className="hr-legend">
          <LegendDot label="Today" className="dot-today" />
          <LegendDot label="Sick" className="dot-sick" />
          <LegendDot label="Personal" className="dot-personal" />
          <LegendDot label="Vacation" className="dot-vacation" />
        </div>

        <div className="hr-actions">
          <button className="hr-btn" onClick={() => api()?.prev()}>
            ‹ Previous
          </button>
          <button className="hr-btn" onClick={() => api()?.today()}>
            Today
          </button>
          <button className="hr-btn" onClick={() => api()?.next()}>
            Next ›
          </button>

          <button className="hr-btn hr-btn-primary" onClick={handleShowTodayLeaves}>
            Show all leaves today ({todayCount})
          </button>
        </div>
      </div>

      <div className="hr-calendar-card">
        <FullCalendar
            ref={calRef}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            height="auto"
            contentHeight="auto"
            expandRows={true}
            headerToolbar={{ left: "", center: "title", right: "" }}
            titleFormat={{ year: "numeric", month: "long" }}
            dayHeaderFormat={{ weekday: "short" }}
            fixedWeekCount={false}
            showNonCurrentDates={true}
            events={events}
            eventDisplay="block"
            dayMaxEvents={2}
            moreLinkClick="popover"
            selectable={false}
            nowIndicator={false}
            dayCellDidMount={(arg) => {
                const cellDate = toYMD(arg.date);
                if (cellDate === todayYMD) arg.el.classList.add("is-today-cell");
          }}
        />
      </div>
    </div>
  );
}

function LegendDot({ label, className }) {
  return (
    <div className="legend-item">
      <span className={`legend-dot ${className}`} />
      <span className="legend-text">{label}</span>
    </div>
  );
}
