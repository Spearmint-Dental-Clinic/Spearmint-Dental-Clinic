import { Image } from "react-bootstrap"

export default function ServiceBox({ icon, title, text}) {
    return (
        <div className="serviceItem rounded mb-4 p-3">
            <Image src={icon} roundedCircle className=""></Image>
            <h4 className="mt-5">{title}</h4>
            <p className="text-secondary">{text}</p>
        </div>
    )
}