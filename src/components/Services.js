import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: 'Enjoy unlimited complimentary artisan cocktails and unique refreshments while you stay.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Located just half a mile from beautiful forrest trails, campgrounds and nature hikes.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'Guest have access to free premium shuttles to several popular locations and attractions.'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'Local, independent craft brewers are featured and rotated for the strenth of their beer- come test your might!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div> 
            </section>
        );
    }
}
