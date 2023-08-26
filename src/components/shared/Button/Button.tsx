//"use client"
import Link from "next/link";
import classes from "./button.module.css";
const Button = ({ title, path, ...props }: { title: string, path: string }) => {
    return (
        <Link className={`${classes.classic__btn} inline-block`} {...props} href={path}> {title} </Link>
    )
}

export default Button