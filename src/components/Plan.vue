<template>
  <div>
    <div style="margin-bottom: 5%;">
      <span> 
        <h1 style="margin-top:2%; margin-right:-22%; display: inline-block;">Plan</h1>
        <button style="width:10%; float:right; margin-top:2%; margin-right: 15%;">Save as PDF</button>
      </span>
  </div>

  <table>
    <tbody>
      
      <tr>
        <td style="margin:10%;">

          <table>
            <h3 class="left"><pre>{{frF}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.freshmanF" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
              </tr>

              <tr>
                <button v-on:click="selectCourse('freshmanF')">+ Add Class</button>
              </tr>
            </tbody>
          </table>

        </td>
        <td style="width:40%;">
          <div style="width:90%;"></div>
        </td>
        <td>

            <table>
            <h3 class="left"><pre>{{frS}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.freshmanS" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
              </tr>

              <tr>
                <button v-on:click="selectCourse('freshmanS')">+ Add Class</button>
              </tr>
            </tbody>
          </table>


        </td>
      </tr>


      <tr>
        <td style="margin:10%">

          <table>
            <h3 class="left"><pre>{{soF}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.sophmoreF" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
              </tr>

              <tr>
                <button v-on:click="selectCourse('sophmoreF')">+ Add Class</button>
              </tr>
            </tbody>
          </table>

        </td>
        <td style="width:40%;">
          <div style="width:90%;"></div>
        </td>
        <td>

            <table>
            <h3 class="left"><pre>{{soS}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.sophmoreS" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
              </tr>

              <tr>
                <button v-on:click="selectCourse('sophmoreS')">+ Add Class</button>
              </tr>
            </tbody>
          </table>


        </td>
      </tr>


    <tr>
        <td style="margin:10%">

          <table>
            <h3 class="left"><pre>{{juF}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.juniorF" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
              </tr>

              <tr>
                <button v-on:click="selectCourse('juniorF')">+ Add Class</button>
              </tr>
            </tbody>
          </table>

        </td>
        <td style="width:40%;">
          <div style="width:90%;"></div>
        </td>
        <td>

            <table>
            <h3 class="left"><pre>{{juS}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.juniorS" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
              </tr>

              <tr>
                <button v-on:click="selectCourse('juniorS')">+ Add Class</button>
              </tr>
            </tbody>
          </table>


        </td>
      </tr>

        <tr>
        <td style="margin:10%">

          <table>
            <h3 class="left"><pre>{{seF}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.seniorF" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
              </tr>

              <tr>
                <button v-on:click="selectCourse('seniorF')">+ Add Class</button>
              </tr>
            </tbody>
          </table>

        </td>
        <td style="width:40%;">
          <div style="width:90%;"></div>
        </td>
        <td>

            <table>
            <h3 class="left"><pre>{{seS}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.seniorS" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled/></td>
              </tr>

              <tr>
                <button v-on:click="selectCourse('seniorS')">+ Add Class</button>
              </tr>
            </tbody>
          </table>


        </td>
      </tr>


    </tbody>
  </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      semesters: {
        freshmanF: [],
        freshmanS: [],
        sophmoreF: [],
        sophmoreS: [],
        juniorF: [],
        juniorS: [],
        seniorF: [],
        seniorS: []
      },
      frF: " Freshman Fall ",
      frS: "Freshman Spring",
      soF: " Sophmore Fall ",
      soS: "Sophmore Spring",
      juF: "  Junior Fall  ",
      juS: " Junior Spring ",
      seF: "  Senior Fall  ",
      seS: " Senior Spring ",
    };
  },
  methods:{
    selectCourse(sem) {
      this.$router.push({name: 'ListView', params: {semester:sem}})
    },
     getCourse(){
       var course = {};
        axios
        .get(
          "http://team2.eaglesoftwareteam.com/courses/id=" + this.$route.params.id
        )
        .then((response) => {
          console.log(response.data);
          course = response.data;
          this.addCourse(course)
        })
        .catch((error) => {
          console.log("ERROR: " + error.response);
        });

        return course;
     },
     addCourse(temp){
      var course = {Course_Number: temp.Course_Number, Course_Name:temp.Course_Name, Course_Credit: temp.Course_Credit}
      switch(this.$route.params.semester){
              case "freshmanF":
                this.semesters.freshmanF.push(course)
                break;
              case "freshmanS":
                this.semesters.freshmanS.push(course);
                break;
              case "sophmoreF":
                this.semesters.sophmoreF.push(course);
                break;
              case "sophmoreS":
                this.semesters.sophmoreS.push(course);
                break;
              case "juniorF":
                this.semesters.juniorF.push(course);
                break;
              case "juniorS":
                this.semesters.juniorS.push(course);
                break;
              case "seniorF":
                this.semesters.seniorF.push(course);
                break;
              case "seniorS":
                this.semesters.seniorS.push(course);
                break;
            }
     }
  },
  created(){
    if(this.$route.params.semester){
      this.getCourse();      
    }
  }
};
</script>

<style>
 label {
  margin:auto;
  padding:10px;
}
table {
  margin: 5%;
}

.left{
  text-align:center;
  width:300%
}

.right{
  text-align:center;
  width:170%;
}

.list {
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 10px;
  width: 35%;
  border: 6px solid #00D0DD;
  padding: 10px;
  background-color: #C0C0C0;
  text-align: center;
}

tbody {
  margin-left: auto;
  margin-right: auto;
}

button {
  background-color:silver;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin:5px;
  width:300%;
}

</style>