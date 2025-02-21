import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useState, useRef, useEffect } from "react";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [bottomNav, setBottomNav] = useState(0);

    const navbarRef = useRef(null);

    useEffect(() => {
        setBottomNav(navbarRef.current?.offsetHeight);
    }, []);

    return (
        <Container fluid className="vh-100 d-flex flex-column">
            {/* Navbar */}
            <Row>
                <Navbar ref={navbarRef} />
            </Row>
            {/* Main Grid Layout */}
            <Row
                style={{ marginTop: `${bottomNav}px` }}
                className="flex-grow-1 flex-row-reverse"
            >
                {/* Sidebar */}
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

                {/* Main Content */}
                <Col
                    md={{ span: isOpen && 10 /*offset:2*/ }}
                    className="p-4 bg-light d-flex justify-content-center align-items-center"
                    style={{
                        marginRight: !isOpen && "110px",
                    }}
                >
                    <div className="w-100 h-100 bg-white rounded p-5 d-flex justify-content-center align-items-center">
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
