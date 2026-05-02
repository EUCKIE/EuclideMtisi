import "../styles/index.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">
                &copy; {new Date().getFullYear()} Euclide Mtisi. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;