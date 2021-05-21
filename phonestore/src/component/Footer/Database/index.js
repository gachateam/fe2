import React from 'react'
import { WidgetBox, WidgetSingleBox, WidgetSingleBoxUl, WidgetSingleBoxA, WidgetSingleBoxE } from '../FooterElement'

class WidgetBoxClass extends React.Component {
    constructor() {
        super();

        this.data = {
            wsb: [
                {
                    title: "Address",
                    addr: ["Order", "Affiliate", "Marketing", "Sourcing", "Gadgets", "Accessories"]
                },
                {
                    title: "Headphone",
                    addr: ["Beats", "Headphone Bose", "Headphone Nocx", "Wireless", "Headphone", "Headphone Mini"]
                },
                {
                    title: "Computers",
                    addr: ["Mini Laptops", "Computers", "Laptop Mouse", "Laptop Pad", "GB Laptop", "XL Laptop"]
                },
                {
                    title: "Camera",
                    addr: ["Lense Camera", "Frame Camera", "Box Camera", "Mini Camera", "XL Camera", "Pointshootcamera"]
                },
            ]
        }
    }
    WidgetSingleBoxItem = (data) => <WidgetSingleBoxE><WidgetSingleBoxA to="#">{data.children}</WidgetSingleBoxA></WidgetSingleBoxE>
    WidgetSingleBoxList = (data) => (
        <WidgetSingleBoxUl>
            {data.list.map((value, index) => (
                <this.WidgetSingleBoxItem key={index}>{value}</this.WidgetSingleBoxItem>
            ))}
        </WidgetSingleBoxUl>
    )
    render() {

        return (
            <WidgetBox>
                {this.data.wsb.map((text, index) => (
                    <WidgetSingleBox key={index}>
                        <p><strong>{text.title}</strong></p>
                        <this.WidgetSingleBoxList list={text.addr} />
                    </WidgetSingleBox>
                ))}
            </WidgetBox>
        );
    }
}

export default WidgetBoxClass