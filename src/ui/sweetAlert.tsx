import Swal from "sweetalert2";
const sweetAlert = ({ icon, title, des }: { icon: any; title: any; des: any }) => {
    return Swal.fire({
        icon,
        title,
        text: des,
    })
}

export default sweetAlert;