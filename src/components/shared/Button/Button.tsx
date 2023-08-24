//"use client"
import Link from "next/link";
import classes from "./button.module.css";
const Button = ({ title, path }: { title: string, path: string }) => {
    return (
        <button className={`${classes.classic__btn}`}><Link className="z-[99999]" href={path}> {title} </Link>  </button>
    )
}

export default Button