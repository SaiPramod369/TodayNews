import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button, CardGroup,Row } from 'react-bootstrap'

export const Corona = () => {

    const [a, aa] = useState([])
    useEffect(() => {

        axios.get("https://newsapi.org/v2/everything?q=corona&apiKey=769ed9ffec4949958643b2d26b93857e").then(e => aa(e.data.articles))

    }, [])
    return (
        <div>

         <center> <div style={{ fontFamily: 'Roboto', marginTop: "7%" }} >
            <Row xs={1} md={4} className="g-3">
              {
                a.map(i =>
                 

                    <Card style={{ width: '25rem',marginLeft:"1.5%" ,backgroundColor:"black" }} className='hii'>
                        <Card.Img variant="Corona" src={i.urlToImage} />
                        <Card.Body>
                            <Card.Title style={{color:'#FF5733'}}>{i.title}</Card.Title>
                            <Card.Text>
                                {i.description}
                            </Card.Text>
                            <Button href={i.url}  target='_blank' style={{backgroundColor:'#FF5733'}} className='hi'><i class="fas fa-link"></i> Link</Button>
                        </Card.Body>
                    </Card>)

            }
          </Row>
          </div>
          </center>

        </div>
    )
}
export default Corona