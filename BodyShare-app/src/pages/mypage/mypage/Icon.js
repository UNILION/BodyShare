import styled from "styled-components";
import Tag from "components/commons/Tag";

const Nickli = styled.li`
    font-size: 28px;
    font-weight: 800;
`;

const Inst = styled.li`

`;

const Pf = styled.ul`
  border: 5px solid rgba(85, 111, 255, 0.2);
  width: 360px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-left: 9.5px;
`;

const Pfpic = styled.img`
  width: 163px;
  height: 163px;
`;

const Pfcommentul = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
  list-style: none;
  place-items: center;
  margin-bottom: 25px;
`;

const Icon = function ({ id, url }) {
  return (
    <>
      <Pf>
        <Pfpic src={`http://localhost:33000/images/users/${url}`} />
        <Pfcommentul>
          <Nickli>{id}</Nickli>
          <Inst>
            <Tag
              tagtitle="요가"
              mr="5px"
            />
            <Tag
              tagtitle="필라테스"
            />
          </Inst>
        </Pfcommentul>
      </Pf>
    </>
  )
};

export default Icon;