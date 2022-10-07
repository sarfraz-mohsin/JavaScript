let myLeads = `["sarfraz"]`


myLeads = JSON.parse(myLeads)
myLeads.push("mohsin")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)