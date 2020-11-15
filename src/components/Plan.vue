<template>
  <div>
    <div style="margin-bottom: 5%;">
      <span> 
        <h1 style="margin-top:2%; margin-right:-22%; display: inline-block;">Plan</h1>
        <button class="customButton" v-on:click="createPDF()" style="width:10%; float:right; margin-top:2%; margin-right: 15%;">Save as PDF</button>
      </span>
  </div>

  <table :class="empty ? '' : 'emp' ">
    <tbody>
      
      <tr>
        <td :class ="empty ? 'pad1' : 'pad2' " style="margin:10%;">

          <table :class="empty ? '' : 'emp' ">
            <h3 class="left"><pre>{{frF}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
                <td><label>Grade</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.freshmanF" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled style="width:55%"/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled style="width:20%"/></td>
                <td><input type="text" v-model="data.Course_Grade" style="width:25%"/></td>
                <td><button v-on:click="removeCourse(index,0,data.Course_Id)" style="width:20%;">X</button></td>
              </tr>

              <tr>
                <button class="customButton" v-on:click="selectCourse('freshmanF')">+ Add Class</button>
              </tr>
            </tbody>
          </table>

        
        <td :class ="empty ? 'pad1' : 'pad2' ">

            <table :class="empty ? '' : 'emp' ">
            <h3 class="left"><pre>{{frS}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
                <td><label>Grade</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.freshmanS" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled style="width:55%"/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled style="width:20%"/></td>
                <td><input type="text" v-model="data.Course_Grade" style="width:25%"/></td>
                <td><button v-on:click="removeCourse(index,1,data.Course_Id)" style="width:20%;">X</button></td>
              </tr>

              <tr>
                <button class="customButton" v-on:click="selectCourse('freshmanS')">+ Add Class</button>
              </tr>
            </tbody>
          </table>


        </td>
      </tr>


      <tr>
        <td :class ="empty ? 'pad1' : 'pad2' " style="margin:10%">

          <table :class="empty ? '' : 'emp' ">
            <h3 class="left"><pre>{{soF}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
                <td><label>Grade</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.sophmoreF" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled style="width:55%"/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled style="width:20%"/></td>
                <td><input type="text" v-model="data.Course_Grade" style="width:25%"/></td>
                <td><button v-on:click="removeCourse(index,2,data.Course_Id)" style="width:20%;">X</button></td>
              </tr>

              <tr>
                <button class="customButton" v-on:click="selectCourse('sophmoreF')">+ Add Class</button>
              </tr>
            </tbody>
          </table>

        </td>

        <td :class ="empty ? 'pad1' : 'pad2' ">

            <table :class="empty ? '' : 'emp' ">
            <h3  class="left"><pre>{{soS}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
                <td><label>Grade</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.sophmoreS" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled style="width:55%"/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled style="width:20%"/></td>
                <td><input type="text" v-model="data.Course_Grade" style="width:25%"/></td>
                <td><button v-on:click="removeCourse(index,3,data.Course_Id)" style="width:20%;">X</button></td>
              </tr>

              <tr>
                <button class="customButton" v-on:click="selectCourse('sophmoreS')">+ Add Class</button>
              </tr>
            </tbody>
          </table>


        </td>
      </tr>


    <tr>
        <td :class ="empty ? 'pad1' : 'pad2' " style="margin:10%">

          <table :class="empty ? '' : 'emp' ">
            <h3 class="left"><pre>{{juF}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
                <td><label>Grade</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.juniorF" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled style="width:55%"/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled style="width:20%"/></td>
                <td><input type="text" v-model="data.Course_Grade" style="width:25%"/></td>
                <td><button v-on:click="removeCourse(index,4,data.Course_Id)" style="width:20%;">X</button></td>
              </tr>

              <tr>
                <button class="customButton" v-on:click="selectCourse('juniorF')">+ Add Class</button>
              </tr>
            </tbody>
          </table>

        </td>

        <td :class ="empty ? 'pad1' : 'pad2' ">

            <table :class="empty ? '' : 'emp' ">
            <h3 class="left"><pre>{{juS}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
                <td><label>Grade</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.juniorS" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled style="width:55%"/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled style="width:20%"/></td>
                <td><input type="text" v-model="data.Course_Grade" style="width:25%"/></td>
                <td><button v-on:click="removeCourse(index,5,data.Course_Id)" style="width:20%;">X</button></td>
              </tr>

              <tr>
                <button class="customButton" v-on:click="selectCourse('juniorS')">+ Add Class</button>
              </tr>
            </tbody>
          </table>


        </td>
      </tr>

        <tr>
        <td :class ="empty ? 'pad1' : 'pad2' " style="margin:10%">

          <table :class="empty ? '' : 'emp' ">
            <h3 class="left"><pre>{{seF}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
                <td><label>Grade</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.seniorF" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled style="width:55%"/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled style="width:20%"/></td>
                <td><input type="text" v-model="data.Course_Grade" style="width:25%"/></td>
                <td><button v-on:click="removeCourse(index,6,data.Course_Id)" style="width:20%;">X</button></td>
              </tr>

              <tr>
                <button class="customButton" v-on:click="selectCourse('seniorF')">+ Add Class</button>
              </tr>
            </tbody>
          </table>

        </td>

        <td :class ="empty ? 'pad1' : 'pad2' ">

            <table :class="empty ? '' : 'emp' ">
            <h3 class="left"><pre>{{seS}}</pre></h3>
            <tbody>
              <tr>
                <td><label>Number</label></td>
                <td><label>Name</label></td>
                <td><label>Credits</label></td>
                <td><label>Grade</label></td>
              </tr>
                  
              <tr v-for="(data,index) in semesters.seniorS" :key='index'>
                <td><input type="text" placeholder="number" v-model="data.Course_Number" disabled style="width:55%"/></td>
                <td><input type="text" placeholder="name" v-model="data.Course_Name" disabled/></td>
                <td><input type="text" placeholder="credits" v-model="data.Course_Credit" disabled style="width:20%"/></td>
                <td><input type="text" v-model="data.Course_Grade" style="width:25%"/></td>
                <td><button v-on:click="removeCourse(index,7,data.Course_Id)" style="width:20%;">X</button></td>
              </tr>

              <tr>
                <button class="customButton" v-on:click="selectCourse('seniorS')">+ Add Class</button>
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
import jsPDF  from "jspdf";


//{Course_Number: "ACCT-0010", Course_Name:"Accounting Lower Division", Course_Credit: "0"}
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
      empty: true,
      user: window.user,
      semesterDB: []
    };
  },
  methods:{
    selectCourse(sem) {
      this.$router.push({name: 'ListView', params: {semester:sem}})
    },
     getCourse(dbAdd,id, semester)
     {
       console.log("getCourse " +dbAdd +" " + id + " " + semester);

       var course = {};
       var url = "http://team2.eaglesoftwareteam.com/courses?id=" + id;
       if(id.includes("-"))
       {
         url = "http://team2.eaglesoftwareteam.com/courses?number=" + id
       }
       else
       {
         url = "http://team2.eaglesoftwareteam.com/courses?id=" + id
       }

       console.log(url);
        axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          course = response.data;
          console.log(course);

          this.addCourse(course,dbAdd,semester)
        })
        .catch((error) => {
          console.log("ERROR: " + error.response);
        });

        return course;
     },
     
     addCourse(temp,dbAdd,semester){
      console.log("AddCourse: " + semester);

      var course = {Course_id: temp.Course_Id, Course_Number: temp.Course_Number, Course_Name:temp.Course_Name, Course_Credit: temp.Course_Credit, Course_Grade: ''}
      switch(semester){
              case "freshmanF":
              case 0:
                this.semesters.freshmanF.push(course);
                this.empty = false;
                
                if(dbAdd){
                  this.addCourseDB(0,course);
                }

                break;

              case "freshmanS":
              case 1:
                this.semesters.freshmanS.push(course);
                if(dbAdd){
                  this.addCourseDB(1,course);
                }
                break;

              case "sophmoreF":
              case 2:
                this.semesters.sophmoreF.push(course);
                this.empty = false;
                if(dbAdd){
                  this.addCourseDB(1,course);
                }
                break;

              case "sophmoreS":
              case 3:
                this.semesters.sophmoreS.push(course);
                if(dbAdd){
                  this.addCourseDB(3,course);
                }
                break;

              case "juniorF":
              case 4:
                this.semesters.juniorF.push(course);
                this.empty = false;
                if(dbAdd){
                  this.addCourseDB(4,course);
                }
                break;

              case "juniorS":
              case 5:
                this.semesters.juniorS.push(course);
                if(dbAdd){
                  this.addCourseDB(5,course);
                }
                break;

              case "seniorF":
              case 6:
                this.semesters.seniorF.push(course);
                this.empty = false;
                if(dbAdd){
                  this.addCourseDB(6,course);
                }
                break;

              case "seniorS":
              case 7:
                this.semesters.seniorS.push(course);
                if(dbAdd){
                  this.addCourseDB(7,course);
                }
                break;
            }
     },

     removeCourse(index,semsterRemove, course){
       switch(semsterRemove){
              case "freshmanF":
                this.semesters.freshmanF.splice(index);
                this.removeCourseDB(0, course);
                break;
              case "freshmanS":
                this.semesters.freshmanS.splice(index);
                this.removeCourseDB(1, course);
                break;
              case "sophmoreF":
                this.semesters.sophmoreF.splice(index);
                this.removeCourseDB(2, course);
                break;
              case "sophmoreS":
                this.semesters.sophmoreS.splice(index);
                this.removeCourseDB(3, course);
                break;
              case "juniorF":
                this.semesters.juniorF.splice(index);
                this.removeCourseDB(4, course);
                break;
              case "juniorS":
                this.semesters.juniorS.splice(index);
                this.removeCourseDB(5, course);
                break;
              case "seniorF":
                this.semesters.seniorF.splice(index);
                this.removeCourseDB(6, course);
                break;
              case "seniorS":
                this.semesters.seniorS.splice(index);
                this.removeCourseDB(7, course);
                break;
            }
     },

     addCourseDB(semesterIndex, course){
       console.log("AddToDB: " + semesterIndex);
       console.log(course);
       var payload = {semester_id: this.semestersDB[semesterIndex].semester_id, course_id: course.Course_id, grade: course.Course_Grade};
       console.log(payload);
        axios
        .post("http://team2.eaglesoftwareteam.com/semester_courses", payload)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log("ERROR: " + error.response)
        })  
      },
      removeCourseDB(semesterIndex,course){
        axios
        .delete("http://team2.eaglesoftwareteam.com/semester_courses/?semester=" + this.semestersDB[semesterIndex].semester_id + "&course=" + course.Course_Id)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log("ERROR: " + error.response)
        })  
      },
  
     getSemesters(){
        axios
        .get("http://team2.eaglesoftwareteam.com/semester?plan=" + this.user.plan_id)
        .then(response => {
          console.log(response.data)
          this.semestersDB = response.data;
          this.getCourses();

          if(this.$route.params.semester){
            this.getCourse(true, this.$route.params.id,this.$route.params.semester);      
          }

      })
      .catch(error => {
        console.log("ERROR: " + error.response)
      })  
     },

     getCourses(){
       console.log(this.semestersDB);

       console.log(this.semestersDB[0].semester_id);
       axios
        .get("http://team2.eaglesoftwareteam.com/semester_courses?semester=" + this.semestersDB[0].semester_id)
        .then(response => {
          console.log(response.data);
          this.getCourseForSemseterCourse(response.data, 0);
      })
      .catch(error => {
        console.log("ERROR: " + error.response)
      }) 
       
     },

     getCourseForSemseterCourse(data, semester){
        for(var x = 0; x < data.length; x++){
            this.getCourse(false,data[x].course_id,semester)
        }
     },
    

    createPDF(){
      var leftCol = 30;
      var lineSpacing = 8;
      var pagePtr = 0;

      var doc = new jsPDF();
      doc.text("Plan", 100, 10);

      doc.text("Freshman Fall", leftCol, 30);
      pagePtr += 30;
      for(var i = 0; i < this.semesters.freshmanF.length; i++){
        var string = this.semesters.freshmanF[i].Course_Credit + " " + this.semesters.freshmanF[i].Course_Number + "  " + this.semesters.freshmanF[i].Course_Name;
        doc.text(string,leftCol, pagePtr + lineSpacing);
        pagePtr += lineSpacing;
      }

      doc.text("Freshman Spring", leftCol, pagePtr + 20);
      pagePtr += 20;
      for( i = 0; i < this.semesters.freshmanS.length; i++){
        string = this.semesters.freshmanS[i].Course_Credit + " " + this.semesters.freshmanS[i].Course_Number + "  " + this.semesters.freshmanS[i].Course_Name;
        doc.text(string,leftCol, pagePtr + lineSpacing);
        pagePtr += lineSpacing;
      }

      doc.text("Sophmore Fall", leftCol, pagePtr + 20);
      pagePtr += 20;
      for( i = 0; i < this.semesters.sophmoreF.length; i++){
        string = this.semesters.sophmoreF[i].Course_Credit + " " + this.semesters.sophmoreF[i].Course_Number + "  " + this.semesters.sophmoreF[i].Course_Name;
        doc.text(string,leftCol, pagePtr + lineSpacing);
        pagePtr += lineSpacing;
      }

      doc.text("Sophmore Spring", leftCol, pagePtr + 20);
      pagePtr += 20;
      for( i = 0; i < this.semesters.sophmoreS.length; i++){
        string = this.semesters.sophmoreS[i].Course_Credit + " " + this.semesters.sophmoreS[i].Course_Number + "  " + this.semesters.sophmoreS[i].Course_Name;
        doc.text(string,leftCol, pagePtr + lineSpacing);
        pagePtr += lineSpacing;
      }

      doc.text("Junior Fall", leftCol, pagePtr + 20);
      pagePtr += 20;
      for( i = 0; i < this.semesters.juniorF.length; i++){
        string = this.semesters.juniorF[i].Course_Credit + " " + this.semesters.juniorF[i].Course_Number + "  " + this.semesters.juniorF[i].Course_Name;
        doc.text(string,leftCol, pagePtr + lineSpacing);
        pagePtr += lineSpacing;
      }

      doc.text("Junior Spring", leftCol, pagePtr + 20);
      pagePtr += 20;
      for( i = 0; i < this.semesters.juniorS.length; i++){
        string = this.semesters.juniorS[i].Course_Credit + " " + this.semesters.juniorS[i].Course_Number + "  " + this.semesters.juniorS[i].Course_Name;
        doc.text(string,leftCol, pagePtr + lineSpacing);
        pagePtr += lineSpacing;
      }

      doc.text("Senior Fall", leftCol, pagePtr + 20);
      pagePtr += 20;
      for( i = 0; i < this.semesters.seniorF.length; i++){
        string = this.semesters.seniorF[i].Course_Credit + " " + this.semesters.seniorF[i].Course_Number + "  " + this.semesters.seniorF[i].Course_Name;
        doc.text(string,leftCol, pagePtr + lineSpacing);
        pagePtr += lineSpacing;
      }

      doc.text("Senior Spring", leftCol, pagePtr + 20);
      pagePtr += 20;
      for( i = 0; i < this.semesters.seniorS.length; i++){
        string = this.semesters.seniorS[i].Course_Credit + " " + this.semesters.seniorS[i].Course_Number + "  " + this.semesters.seniorS[i].Course_Name;
        doc.text(string,leftCol, pagePtr + lineSpacing);
        pagePtr += lineSpacing;
      }

      doc.save("plan");
    }
  },
  created(){
    console.log(this.user);

      if(this.semesters.freshmanF.length > 0 || this.semesters.sophmoreF.length > 0 || this.semesters.juniorF.length > 0 || this.semesters.seniorF.length > 0){
        this.empty = false;
      }

    this.getSemesters();
  }


};
</script>

<style>
.pad1 {
  padding:0px 250px 50px 150px;
}

.pad2{
  padding:0px 60px 0px 60px;
}

 label {
  margin:auto;
  padding:10px;
}
.emp{
  margin:5%;
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

.customButton {
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

input {
  margin: 0px;
  padding: 0px;
}

</style>