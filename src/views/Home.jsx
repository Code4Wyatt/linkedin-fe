import { Col, Container, Row } from "react-bootstrap"
import ExistingPosts from "../components/ExistingPosts"
import NewPost from "../components/NewPost"
import { useState , useEffect } from "react"
import LeftSideBarCardProfile from "../leftSideBarHome/LeftSideBarCardProfile"
import RightSideBar from "../rightSideBarHome/RightSideBar"
import NavBar from "../components/NavBar";

const Profile = (props) => {
  
  const [ posts, setPosts ] = useState([]);

  const [ profile , setProfile ] = useState([])

  const fetchPosts = async () => {
    try {
      let response = await fetch(`http://localhost:5001/post`);

      if (response.ok) {
        let data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfile = async () => {
    try {
      let response = await fetch(
        `http://localhost:5001/profiles/61eab4dedad7a313cd107fb4`);
      if (response.ok) {
        let data = await response.json()
        setProfile(data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchProfile();
  }, []);

  return (
    <>
    <NavBar/>
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col xs={12} md={4} lg={2} style={{ height: "100%" }}>
          <LeftSideBarCardProfile profile={profile}/>
        </Col>
        <Col xs={12} md={8} lg={6} style={{ height: "100%" }}>
          <NewPost profile={profile}  posts={posts} fetchPosts={fetchPosts} />
          <ExistingPosts profile={profile} posts={posts} fetchPosts={fetchPosts} />
        </Col>

        <Col md={4} className="d-none d-md-block" style={{ height: "100%" }}>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Profile;