export const schemaTypes = [
  {
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
      {name: 'title', title: 'Job Title', type: 'string'},
      {name: 'description', title: 'Description', type: 'text'},
      {name: 'salary', title: 'Salary', type: 'text'},
      {name: 'location', title: 'Location', type: 'string'},
      {name:"requirement",title:"Requirement",type:"string"},
      {name: 'category', title: 'Category', type: 'string'},
    ],
  },
]
