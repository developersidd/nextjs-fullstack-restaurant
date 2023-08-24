import classes from "./button.module.css";
const Button = ({ title }: { title: string }) => {
    return (
        <button className={`${classes.classic__btn}`}> {title} </button>
    )
}

export default Button