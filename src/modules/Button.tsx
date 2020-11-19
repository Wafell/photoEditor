import React from 'react';

interface ButtonProps {
    text: string,
    //onClick: () => void,
}

function Button(props: ButtonProps) {
    return (
        <button className="Button">{props.text}</button>
    )
}

function ToolButton(props: ButtonProps) {
    return (
        <button className="ToolBarButton">{props.text}</button>
    )
}

export {
    Button,
    ToolButton,
}