import { useState } from "react";
import { ChevronLeft, Menu, Users } from "lucide-react"; // Icons
import { Button, ListGroup, Container, Collapse } from "react-bootstrap"; // Bootstrap Components
import "./Sidebar.css"; // Custom Styles

const sections = [
    { name: "الموارد البشرية", icon: <Users className="section-icon" /> },
    { name: "المبيعات", icon: <Users className="section-icon" /> },
    { name: "التسويق", icon: <Users className="section-icon" /> },
    { name: "التصميم", icon: <Users className="section-icon" /> },
    { name: "التطوير", icon: <Users className="section-icon" /> },
    { name: "الدعم الفني", icon: <Users className="section-icon" /> },
    { name: "المالية", icon: <Users className="section-icon" /> },
    { name: "العلاقات العامة", icon: <Users className="section-icon" /> },
    { name: "التدريب", icon: <Users className="section-icon" /> },
];

// eslint-disable-next-line react/prop-types
function Sidebar({ isOpen, setIsOpen }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleSection = (index) =>
        setActiveIndex(activeIndex === index ? null : index);

    return (
        <div
            className={`sidebar d-flex flex-column position-fixed ${
                isOpen ? "col-md-2" : "collapsed"
            }`}
            style={{ right: 0 }}
        >
            {/* Sidebar Header */}
            <Container className="sidebar-header d-flex justify-content-between align-items-center p-3">
                <h2 className={`mb-0 ${!isOpen ? "d-none" : ""}`}>
                    الأكاديمية
                </h2>
                <Button
                    variant="light"
                    className="border-0"
                    onClick={toggleSidebar}
                >
                    <Menu size={24} />
                </Button>
            </Container>

            {/* Sidebar Menu */}
            <ListGroup variant="flush" className="sidebar-menu">
                {sections.map((section, index) => (
                    <div key={index}>
                        <ListGroup.Item
                            className="sidebar-item d-flex justify-content-between align-items-center border-0"
                            action
                            onClick={() => toggleSection(index)}
                        >
                            <div className="d-flex align-items-center gap-2">
                                {section.icon} {/* Icon next to the title */}
                                <span className={`${!isOpen ? "d-none" : ""}`}>
                                    {section.name}
                                </span>
                            </div>
                            <ChevronLeft
                                className={`chevron ${
                                    activeIndex === index ? "rotate-90" : ""
                                }`}
                            />
                        </ListGroup.Item>

                        {/* Dropdown Content */}
                        <Collapse in={activeIndex === index}>
                            <div className="dropdown-content">
                                محتوى القسم هنا
                            </div>
                        </Collapse>
                    </div>
                ))}
            </ListGroup>
        </div>
    );
}

export default Sidebar;
