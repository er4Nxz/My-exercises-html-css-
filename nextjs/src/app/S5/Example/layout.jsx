const Layout = ({children,Show}) => {
    return (
        <div className="min-h-screen bg-gray-100">
            {children}
            {Show}
        </div>
    );
}
 
export default Layout;