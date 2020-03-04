// ./src/pages/share-thought.js

import Form from "react-bootstrap/Form";
import Router from "next/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const { useState } = require("react");

const ShareThought = () => {
    const [message, setMessage] = useState("");

    const submit = async (event) => {
        event.preventDefault();
        await fetch("/api/thoughts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message
            })
        });
        Router.push("/");
    }

    return (
        <Container>
            <Form onSubmit={submit}>
                <Form.Group>
                    <Form.Label>What is in your mind?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Say something"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Share</Button>
            </Form>
        </Container>
    );
}

export default ShareThought;