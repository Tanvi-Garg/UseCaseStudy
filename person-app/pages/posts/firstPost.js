

import axios from "axios"; //npm i axios
 
const Index = ({ userList }) => <div style={{ margin: 20 }}>
  <h3>Call Persons API and display records in table</h3>



  <table border="1">
    <thead>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
    </thead>

    

    <tbody>
    {userList.map((post) => 
      <td>{post.firstName}</td>  
      )
    }

    {userList.map((post) => 
      <td>{post.lastName}</td>  
      )
    }

    {userList.map((post) => 
      <td>{post.age}</td>  
      )
    }
   

    
      
    </tbody>
  </table>
</div>
  
Index.getInitialProps = async () => {
  const { data } = await axios.get('http://localhost:8080/Persons');
  console.log(data);
  return { userList: data };
}
  
export default Index;
