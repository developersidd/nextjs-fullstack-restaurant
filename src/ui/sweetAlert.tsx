import Swal from "sweetalert2";
const sweetAlert = ({ icon, title, des }: { icon: any; title: any; des: any }) => {
    return Swal.fire({
        icon,
        title,
        html: des,
    })
}

export default sweetAlert;