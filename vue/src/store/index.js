import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id:100,
    title:"This is title",
    slug:'this-is-slug',
    status:"draft",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD782S4cWMIFpscSqMM_aFUzT8L-7v75q9IQ&usqp=CAU",
    description:"This is description",
    created_at:"2023-09-13 18:00:00",
    updated_at:"2023-09-13 18:00:00",
    expire_date:"2023-09-13 18:00:00",
    questions:[
      {
        id:1,
        type:"select",
        question: "This is quesiton",
        description:null,
        data:{
          options:[
            {
              uuid:1234556,
              text:"USA"
            },
            {
              uuid:2234556,
              text:"India"
            }
          ]
        }
      },
      {
        id:12,
        type:"select",
        question: "This is quesiton 2",
        description:null,
        data:{
          options:[
            {
              uuid:1234556555,
              text:"USA"
            },
            {
              uuid:2234556333,
              text:"India"
            }
          ]
        }
      }
    ],
  },
  {
    id:100,
    title:"This is title",
    slug:'this-is-slug',
    status:"draft",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4qe-TiNdb7kONl0a1C3a1R3H9TPWKSJeGg&usqp=CAU",
    description:"This is description dfgdg df gff dg ffdfgdgd fffvcvbm ujkiufh thhgfhfhfyhfg gffyhtfgt ",
    created_at:"2023-09-13 18:00:00",
    updated_at:"2023-09-13 18:00:00",
    expire_date:"2023-09-13 18:00:00",
    questions:[
      {
        id:1,
        type:"select",
        question: "This is quesiton",
        description:null,
        data:{
          options:[
            {
              uuid:1234556,
              text:"USA"
            },
            {
              uuid:2234556,
              text:"India"
            }
          ]
        }
      },
      {
        id:12,
        type:"select",
        question: "This is quesiton 2",
        description:null,
        data:{
          options:[
            {
              uuid:1234556555,
              text:"USA"
            },
            {
              uuid:2234556333,
              text:"India"
            }
          ]
        }
      }
    ],
  }
]

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys:[...tmpSurveys],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({commit}){
      return axiosClient.post("/logout").then(response => {
        commit('logout')
        return response;
      });
    }
  },
  mutations: {
    logout: (state) => {
      console.log('here');
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
