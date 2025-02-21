import { faNoteSticky, faUser } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

export default function Navbar({ ref }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-light shadow-md p-2 header flex position-fixed" ref={ref}>
            <div className="container mx-auto flex justify-between items-center p-1">
                {/* Navigation Items */}
                <ul className="flex space-x-4 text-gray-700 font-medium">
                    {/* Always visible on all screens */}
                    <li className="">الإدارة</li>
                    <li className="hover:text-gray-900 cursor-pointer">الرئيسية</li>

                    {/* Hidden on small screens, shown when "عرض المزيد" is clicked */}
                    <div className={`small-screen-links ${isOpen ? "open" : ""}`}>
                        <li className="hover:text-gray-900 cursor-pointer">الإدارة</li>
                        <li className="hover:text-gray-900 cursor-pointer">الخريجين</li>
                        <li className="hover:text-gray-900 cursor-pointer">وحدة ضمان الجودة</li>
                        <li className="hover:text-gray-900 cursor-pointer">الإعدادات</li>
                        <li className="hover:text-gray-900 cursor-pointer">الطلب</li>
                        <li className="hover:text-gray-900 cursor-pointer">برنامج التسجيل</li>
                        <li className="hover:text-gray-900 cursor-pointer">برنامج تسجيل الطلب</li>
                    </div>

                    {/* "عرض المزيد" button for small screens */}
                    <li
                        className="hover:text-gray-900 cursor-pointer small-screen-only"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        عرض المزيد
                    </li>
                </ul>

                {/* Icons on the right */}
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="bg-white p-3 rounded-pill">
                        <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <div className="bg-white p-3 rounded-pill">
                        <FontAwesomeIcon icon={faNoteSticky} />
                    </div>
                    <div className="bg-white p-3 rounded-pill">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </div>
        </nav>
    );
}