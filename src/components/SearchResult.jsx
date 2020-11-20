import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import FieldMapper from "../FieldMapper";

class SearchResult extends Component {
    render() {
        return (
            <div>
                {
                    this.props.jsons.map((json, index) => {
                        return (
                            <Card key={index} bg="light" style={{ width: '32rem' }} className="m-2">
                                <Card.Body>
                                    <Card.Text>
                                        {
                                            Object.entries(JSON.parse(json)).map(([key, value]) => {
                                                let displayName = FieldMapper.getDisplayName(key);
                                                let displayValue = value;
                                                if (Array.isArray(value)) {
                                                    displayValue = value.join(", ");
                                                }
                                                return <span key={key}>{displayName}: {displayValue}<br /></span>
                                            })
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default SearchResult;