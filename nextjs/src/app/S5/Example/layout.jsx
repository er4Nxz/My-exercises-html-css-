const Layout = (prop) => {
    return (
        <div className="min-h-screen bg-gray-100">
            {prop.children}
            {prop.Show}
        </div>
    );
}
 
export default Layout;