import React from 'react'
import '../css/Event.css'

const Event = (props) => {

    const formattedDate = new Date(props.date).toLocaleDateString()

    const formattedTime = new Date(`1970-01-01T${props.time}`).toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
    })

    return (
        <article className='event-information'>
            <img src={props.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p>
                        <i className="fa-regular fa-calendar fa-bounce"></i> {formattedDate}
                        <br />
                        {formattedTime}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Event