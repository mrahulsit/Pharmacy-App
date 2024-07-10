import React from 'react';
import { Container, Nav, Button, Form, FormControl } from 'react-bootstrap';
import reactLogo from './assets/react.svg';

const Header = () => {
  return (
    <Container
      style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(156,21,168,1) 27%, rgba(0,212,255,1) 100%)'
      }}
      className="px-4 mx-3"
    >
      <header className="p-3 d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
        <div className="d-flex align-items-center">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none text-white">
            <img src={reactLogo} alt="React Logo" />
          </a>
          <Form className="d-flex ms-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADrElEQVR4nO2YaYiNYRTH37FMtkImPpCtFBNll3039i1SGJTsa0qosXwgIomSpiTbB1FqxMiSpUTZl6xZkgjZ9/2n0/yvHq+5730Gd4aaf53ufd97znn+z3LOc84NgmIU4z8AUAqo7EiFoibUGTgLvMAPb4FnkqfALeAycBo4COwBtgPrgbXAMiALmA2MB0YCLQpC8CjwUoMcAVbLqSvrgGxHdgMPReQAcEgEL8rXG+BVxCQ/A6m+BB8Bu4AdQLqnTdl4usAiIM15bg30BeZIbEJvfcmlaDa2Hc2CQgBwArjuq1xJS7486cwE4J6d1cAHQG0RnKforRgkGcA7YKOvcn0RnKZIG53PEYilm9pA3ThSy9FLSXB2DWt8CTaSwV3gAXBO0Xhcn0d0qGOSo8h1ZW9Ix+yuAtf0eUFRbkG4SeMt8yXYVAajgiQBqKYUlqWJGxb6GreSwYgkEhwO9ATOAG003mxf4/YyGAa0tXMW+j1HW/Y7khk6e52Amhpvri/BLjIYHBQCgBoab7GvQYYMBiSdXfDTgqz2NbAryNBHzyXszDi/VwGaA90kg4ChFlS6+Cc7V9hSoF7EWPOBwxpvgy9BG9CQETGBbKdoyBKZGSI4VoRNemhH7No8ppSzGKjjpLQUFRE7fAkOFsEeXgYRUJHwDfikquaJfH8EZjp6t4H9BV3BPyJI3pajqK/qvG+piDaM0zt7PuXreGCCLU6zKidCyuoOv6+VKZePj/LADRW49n0/cNOX4IAEBPuFCtXskDQE2snHrIhxRkjHEvY2I+tLsH8UQU8fo+WjY4ROB+lkamJfLWP4OO/3FwgOlY++ETpTpNNJLQX5HYeoPGhLXxqYavfzbxQDn1T5/LIqQEndwxbN5aw41piVfJz3kfIKiywl0zIFIWiQvWGLO7ACaJV+i0X5Sn3/Ee1xAfSW8k6gekKDOBCRrfJliXgfsBm4o3ennUnYauM1HtBLykv+Rl9C3pnOVb9sredJJe2v6oen67uhsY9DO3voaqoVM1IzZfdy61CD38LaTctnBSBt9/kldY+Wd4cA79VXN/OtZiYp659Tj5ErR1ecpJylBt7O2QKngDDp7tzJYbHUshD4AnyQbnsl7te2SFEEbVUKG29UHKerF7IzOSYewdRQyRSTiapWwjImYqUyQqsak47OLnTVPxnPgSYWKGqqvsWqniIH0FgEHwMNgAla2SbBvwLy/q95rWi/r21OnBcLE+Sdf/uf5nwyu8piBP8SvgNotbsgnbnPmQAAAABJRU5ErkJggg=="
                alt="Search"
              />
            </Button>
          </Form>
        </div>

        <Nav className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-white">
          <Nav.Link href="#" className="nav-link px-2 text-white">Medicine</Nav.Link>
          <Nav.Link href="#" className="nav-link px-2 text-white">Health Blogs</Nav.Link>
          <Nav.Link href="#" className="nav-link px-2 text-white">PLUS</Nav.Link>
          <Nav.Link href="#" className="nav-link px-2 text-white">Offers</Nav.Link>
          <Nav.Link href="#" className="nav-link px-2 text-white">Value Store</Nav.Link>
        </Nav>

        <div className="text-end d-flex align-items-center text-white">
          {/* <FaShoppingCart className="me-2" /> */}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElklEQVR4nO3YfUwTZxwH8N8W9uLisjn/MOOPvWTZP5NlMBxogoioEy1OJ3FzWWa2DLkCoUWZCC2uI05GS4C7YyyKRgwKvfI6R0KQN8vLNHM6wI1NUcaAOwyJMGRDhd71tzxdjxUnxvWOQDK/yTcp7aX93D3PPXccwIP8n7K0uT/61bb+0Y86rk28XX+xN5w7zawo//Z5mA9Z0fF7QFD7dWdwxwjGXx3D3T1jGFVzHjeWN0+EWe2GufZBcMfwboIj3fzzKCb9+gfuaL2EkRWtroZzTV/MLbBzeIMMJNV0jWLUqfabMlBT0SKuPNEYOqfIoPaR7KCOYQdpcPtIVrD19AsRpfYhGbmu1F4Pc53A88ITpPLfy4/XRXscxZsRNTWPwXzK8tIzCzTlzZMycvuFwcMUL8ZpeXF7LO9Yq+UxIEbA5+KGcOGcIdeX2i/LwHfP9aNWkGYsJYgjWl7s0vJiGyVI1RQvFVG8xFCC9BkliHpqQNwRwzs2xQ5iYHwf+iZ0o/IRWWuzV8nAAxf7cd/QzECtN+XFMYoXeyhe/MQrYBjXZCK4d06eQScidk+gukBhCtrrFTC0uHEjAW6qaMVxh4jjkhPDfhzFUIUN++kGftg36QGUKr0ChhS3LtKUtzgJsuv6DSSJ+mV0as1U0q1XbnkcRVEH3iairFkgwOqrgy5gxuBt1Fz+U1Hf6h7HaF785wQbwNe8BpJFmgDZC1dcwJoxp8pzUBw2IT7sNTCMa8ohwISGH1zAtnGVgbyX80+Of2HdNnmp2f/dJUwcmMT3eyf+e3+bnDasHuunXhEQzCW+/sdOTd3dBH8/5PWJQc7eO4FxPPqD4lhsQ8/mn0S/o7Xob+9REahw/nkAa8FiQ9KA2i6vh3jnnUPMS18rx7mAXKYMfLn0jFpXD2fMoCNCLeA2GfgoXTnxcd9kIyVI9V6Xl6piBccWUC0ZlYvBwjlkJJi5JJh3sXDHPIAimG0GMBU+DvMmB0qWgJm7NoW0kHLjYLadA7OtfqoZxQ2Qmt8MyXTLPWqHZJZSH5nF+YGZ46cjPZpZgrCXRdhD30dzRUj5apH6yIzKxQvNJVYfs9X5L+CnBfeJoxGScwWIOfSI+kAA0BuZhvg0FnfmWvE9tgzXpB/B1ekFt3zSDu2CvXl6uU8ls+krU1hptfFL3GIpwoj9h3FVKovLUtlW2JPnC7MVnZEZSzLlY8k3Z9FafRbTs4tQb2Qw0ZDz+rQdSWO3kvcz82yu7U5Utbm20xuZzlnDuX7YyHQmpjHIHq3GguI6JFidgZF2mbKf8dyOgAko5fMCPGJtwOyDlW4grdIVZIYkGJjNBOQ+Gn/XQGfNsDPl07Yz0rd1+5hAmO3ojHSIzkgX6gx0WYKR+QAAH7rbdiaTyUdvYHU6A1OlM9AHE9Nyls467kFUyJMAsAQAXgSAVwCA/NND5tUy8tTE3Tfc75EbUj8AeAkAyNLyNADcdToozQL3j60DgEiF3UAeqgHAtLNeachlaY0KuEh3yb3grDxmJk+zyBeToSVDGAIA4e4jux4ANG4Aef2m+7NV7iGXh5rs7D2H+S/LCwZDJjf5kgAAAABJRU5ErkJggg==" alt="Cart" />
          <Button variant="outline-primary" className="me-2">Login</Button>
          <Button variant="primary">Sign-up</Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
