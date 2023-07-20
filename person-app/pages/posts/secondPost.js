//pages/index.js
import axios from "axios"; //npm i axios
 
const Index = ({ userList }) => <div style={{ margin: 20 }}>
 <h3>Next.js How to call API and display records in table</h3>
 <table border="1">
 <thead>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Email</th>
       <th>Avatar</th>
 </thead>
<tbody>
{userList.data.map((x, i) => <tr key={i}>
 <td>{x.first_name}</td>
 <td>{x.last_name}</td>
 <td>{x.email}</td>
 <td><img src={x.avatar} width="50" height="50" /></td>
 </tr>)}
</tbody>
</table>
</div>
  
Index.getInitialProps = async () => {
  const { data } = await axios.get('https://reqres.in/api/users');
  return { userList: data };
}
  
export default Index;