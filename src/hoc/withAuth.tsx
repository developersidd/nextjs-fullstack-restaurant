import SignInPage from "@/app/signin/page";
import { axiosInstance } from "@/utils/axios";

function withAuth<T>(Component?: any) {
    const Auth = async (props: T) => {

        const { data } = await axiosInstance.get("/user");
        const { email } = data || {};
        console.log("data:", data)
        console.log("email:", email)
        //  if is loading then show loading indicator
        /*if () {

        }*/
        // If user is not logged in, return login component
        if (!email) {
            return <SignInPage />;
        }

        // If user is logged in, return original component
        return <Component {...props} />;
    };
    /*
        // Copy getInitial props so it will run as well
        if (Component.getInitialProps) {
            Auth.getInitialProps = Component.getInitialProps;
        }
    */
    return Auth;
}

export default withAuth;