function authentication(conponent) {
    const accesstowken = localStorage.getItem("access-tokon");

    const isLogin = accesstowken ? true : false;
    if (isLogin) {
        return conponent;
    }
    else {
        return () => {
            <div>Unauthorise</div>
        }
    }
}
export default authentication;