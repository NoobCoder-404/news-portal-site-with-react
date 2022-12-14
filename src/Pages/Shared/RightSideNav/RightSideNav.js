import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-3 " variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark ">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mt-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
