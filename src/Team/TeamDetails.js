import React, { useContext, useEffect } from 'react'
import { GameContext } from '../Context/context'
import {Button} from "reactstrap"
import { Link, Redirect } from 'react-router-dom';
import {FaInstagram} from "react-icons/fa"

export default function TeamDetails() {

    const {state} = useContext(GameContext)
    const {teams,teamId,users} = state;
    let theTeam = [];
    let theUser = [];

    theTeam = teams.filter(t => t.userUid === teamId)[0]
    theUser = users.filter(u => u.uid === teamId)[0]
    
   
if(teamId === null){
    return <Redirect to="/teams"/>
} else 
    return (
        <div className="detailContainer">
            <div className="detailCard">
                <div className="detailNo">
                    {theUser.teamNo}
                </div>
                <h1>{theUser.teamName}</h1>
                <div className="border"></div>
                <div className="detailInfo">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>               
                </div>
                <div className="text-white"><h3>Members</h3></div>
                    <div className="detailRow">
                            <div className="detailSubCard">
                                <h4>{theTeam.member1Name}<span><a href={theTeam.member1Insta} target="_blank"><FaInstagram/></a></span></h4>
                            </div>
                            <div className="detailSubCard">
                                <h4>{theTeam.member2Name}<span><a href={theTeam.member2Insta} target="_blank"><FaInstagram/></a></span></h4>
                            </div>
                            <div className="detailSubCard">
                                <h4>{theTeam.member2Name}<span><a href={theTeam.member2Insta} target="_blank"><FaInstagram/></a></span></h4>
                            </div>
                            <div className="detailSubCard">
                                <h4>{theTeam.member2Name}<span><a href={theTeam.member2Insta} target="_blank"><FaInstagram/></a></span></h4>
                            </div>
                            <div className="detailSubCard">
                                <h4>{theTeam.member2Name}<span><a href={theTeam.member2Insta} target="_blank"><FaInstagram/></a></span></h4>
                            </div>
                            <div className="detailSubCard">
                                <h4>{theTeam.member2Name}<span><a href={theTeam.member2Insta} target="_blank"><FaInstagram/></a></span></h4>
                            </div>
                    </div>
                </div>
            <Link to="/teams"><Button className="backbutton">Go back</Button></Link>
        </div>
    )
}
