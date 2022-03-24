import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios';
import { FaMinusCircle, FaTrashAlt } from "react-icons/fa";
import { removeUser } from '../../services/removeAxios'
import { useRecoilState } from 'recoil';
import { authState } from '../../StateGobal/authState';


function Utilisateurs() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [sexe, setSexe] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [authData, setAuthDAta] = useRecoilState(authState);
    const [allData, setAllData] = useState([]);


    const fetchAllUsers = async () => {
        const resultat = await axios.get(
            'http://localhost:5300/users',
        );
        if (resultat.status === 200) {
            console.log(resultat.data);
        }
        setAllData(resultat.data);
    };

    useEffect(() => {
        fetchAllUsers();
        return () => {

        }
    }, [])

    const handleRemove = (userId) => {

        removeUser(userId).then(response => {
            console.log(response.data)
            fetchAllUsers();
        }, reason => {
            console.log(reason?.response.data)
        })

    }


    return (
        <div style={{ paddingTop: "120px", backgroundColor: '#851E2F' }}>
            <Container style={{ minHeight: "100vh" }}>
                <Table bordered >
                    <thead style={{ color: 'white' }}>
                        <tr style={{ textAlign: 'center' }}>
                            <th style={{ width: '20px' }}>#</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Sexe</th>
                            <th>Naissance</th>
                            <th>Adresse</th>
                            <th>Arrivé</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ color: 'white' }}>
                        {
                            allData.map((info, index) => (
                                <tr style={{ textAlign: 'center' }} key={info._id} >
                                    <td>{index + 1}</td>
                                    <td>{info.nom}</td>
                                    <td>{info.prenom}</td>
                                    <td>{info.sexe}</td>
                                    <td>{info.birthDay}</td>
                                    <td>{info.userMail}</td>
                                    <td>{info.date}</td>
                                    <td><FaMinusCircle />  &nbsp; &nbsp; <a href='#' onClick={()=>handleRemove(info._id)}><FaTrashAlt /></a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Utilisateurs
