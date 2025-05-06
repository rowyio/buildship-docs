var Component=(()=>{var N=Object.create;var I=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty;var v=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),z=(e,t)=>{for(var s in t)I(e,s,{get:t[s],enumerable:!0})},E=(e,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of q(t))!V.call(e,o)&&o!==s&&I(e,o,{get:()=>t[o],enumerable:!(r=J(t,o))||r.enumerable});return e};var m=(e,t,s)=>(s=e!=null?N(G(e)):{},E(t||!e||!e.__esModule?I(s,"default",{value:e,enumerable:!0}):s,e)),Z=e=>E(I({},"__esModule",{value:!0}),e);var w=v((ae,D)=>{D.exports=_jsx_runtime});var K=v((de,M)=>{M.exports=React});var re={};z(re,{AgentSelector:()=>U,default:()=>H,frontmatter:()=>oe});var u=m(w());var{useMDXComponents:h}=MdxJsReact;var i=m(w());var Q=function(t){let{ClipboardField:s,Typography:r}=h()||{};s||A("ClipboardField",!0),r||A("Typography",!0);let[o,y]=t.useState(""),p=t.triggerValues?.["config.apiKey"],c=t.projectId,l=t.flowId,x=t.flowLabel,T=p?t.triggerValues?.["config.toolName"]:"",k=`npx -y buildship-tools create-mcp-server --project ${c} --flows ${l} --apiKey ${p} --token ${o} --outputFolder ${T} --client claude`;return t.useEffect(()=>{t.getIdToken&&t.getIdToken().then(a=>a&&y(a))},[t.getIdToken]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:t.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,i.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/website-a1s39m.appspot.com/o/buildship-app-logos%2Fanthropic.png?alt=media&token=ec0eb8dc-f0d4-4f97-a144-023f1aa8118e",width:"16",height:"16"})}),(0,i.jsx)(r,{sx:a=>({...a.typography.headline6}),children:"Claude MCP - Setup Guide"}),(0,i.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(r,{sx:a=>({marginTop:"24px",...a.typography.body}),children:"Documentation \u2197"})}),(0,i.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(r,{sx:a=>({marginTop:"8px",...a.typography.body}),children:"Video Tutorial \u2197"})}),(0,i.jsx)(r,{sx:a=>({marginTop:"24px",color:a.palette.text[900],...a.typography.body}),children:"Pre-requisite"}),(0,i.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,i.jsx)("li",{children:(0,i.jsxs)(r,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:["Ensure you have the ",(0,i.jsx)("a",{href:"https://claude.ai/download",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Claude Desktop"})," app installed"]})}),(0,i.jsx)("li",{children:(0,i.jsx)(r,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:'Use "Ship" button on top to deploy your workflow'})}),(0,i.jsx)("li",{children:(0,i.jsxs)(r,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:["You'll need to have ",(0,i.jsx)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Node.js installed"})," to run the commands"]})})]}),(0,i.jsx)(r,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:"You can add the MCP tool to your Claude app using one of the following options."}),(0,i.jsx)(r,{sx:a=>({marginTop:"24px",color:a.palette.text[900],...a.typography.body}),children:"Option 1: Hosted on BuildShip"}),(0,i.jsx)(s,{content:k+" --proxy",label:"",description:"Recommended for easy hosted experience. Run the following command from a terminal or command line tool."}),(0,i.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"12px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,i.jsx)("li",{children:(0,i.jsxs)(r,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:["After the command updates your Claude config, ",(0,i.jsx)("strong",{children:"restart the Claude Desktop app"})," (if it's open) to load the MCP tool added"]})}),(0,i.jsx)("li",{children:(0,i.jsx)(r,{sx:a=>({marginTop:"12px",color:a.palette.text[400],...a.typography.body}),children:"To test, Ask Claude to use the tool. Claude will ask for permission. Once you allow it, the tool will run and show the result."})})]}),(0,i.jsx)(r,{sx:a=>({marginTop:"12px",color:a.palette.text[400],...a.typography.body}),children:"You'll see it successfully updated Claude config when you see a 'Tool' icon within Claude Chat"}),(0,i.jsx)("img",{src:"https://storage.googleapis.com/buildship-2vqhlv-us-central1/tool-trigger-assets/claude-tool.png",width:"100%",height:"auto",style:{marginTop:"16px",borderRadius:"4px"}}),(0,i.jsx)(r,{sx:a=>({marginTop:"8px",color:a.palette.text[400],...a.typography.body}),children:"Note: Since the tool is hosted on BuildShip, it will use your BuildShip credits when executed."}),(0,i.jsx)(r,{sx:a=>({marginTop:"24px",color:a.palette.text[900],...a.typography.body}),children:"Option 2: Self hosted"}),(0,i.jsx)(r,{sx:a=>({marginTop:"4px",color:a.palette.text[400],...a.typography.body}),children:"Run the following command \u2014 it will:"}),(0,i.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,i.jsx)("li",{children:(0,i.jsx)(r,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:"Convert the workflow into a JavaScript function"})}),(0,i.jsx)("li",{children:(0,i.jsx)(r,{sx:a=>({color:a.palette.text[400],...a.typography.body}),children:"Download the function to your local machine"})})]}),(0,i.jsx)(s,{content:k,label:"",description:""}),(0,i.jsx)(r,{sx:a=>({marginTop:"8px",color:a.palette.text[400],...a.typography.body}),children:"You can then connect the exported function to Claude using the MCP protocol."})]})};function ee(e){return(0,i.jsx)(i.Fragment,{children:`
`})}function j(e={}){return(0,i.jsx)(Q,{...e,children:(0,i.jsx)(ee,{...e})})}function A(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var n=m(w());var $=e=>{let{Box:t,ClipboardField:s,Typography:r}=h()||{};return t||C("Box",!0),s||C("ClipboardField",!0),r||C("Typography",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:e.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,n.jsx)("img",{src:"https://storage.googleapis.com/buildship-app-us-central1/icons/elevenlabs.jpeg",width:"16",height:"16"})}),(0,n.jsx)(r,{sx:o=>({...o.typography.headline6}),children:"ElevenLabs - Setup Guide"}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/elevenlabs",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(r,{sx:o=>({marginTop:"24px",...o.typography.body}),children:"Documentation \u2197"})}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/elevenlabs",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(r,{sx:o=>({marginTop:"8px",...o.typography.body}),children:"Video Tutorial \u2197"})}),(0,n.jsx)(r,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"Pre-requisite"}),(0,n.jsxs)(r,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:["Open ",(0,n.jsx)("a",{href:"https://elevenlabs.io/app/conversational-ai/agents",target:"_blank",rel:"noopener noreferrer",children:"ElevenLabs Voice Agents"})," Dashboard, set up a conversation AI Agent and follow the steps below to add the tool to it."]}),(0,n.jsx)(r,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"1. Create a new tool"}),(0,n.jsx)(r,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:`Click the "Add tool" button from the agent's setup section and select "Custom Tool" option from the dropdown menu.`}),(0,n.jsx)(r,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"2. Configure the tool"}),(0,n.jsx)(r,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:'Use the "Webhook" tool type and add the configuration as follows'}),(0,n.jsxs)(t,{sx:{marginTop:"12px",display:"flex",gap:"12px",flexDirection:"column"},children:[(0,n.jsx)(s,{content:e.flowLabel,label:"Copy the Name",description:""}),(0,n.jsx)(s,{content:e.triggerValues?.["config.toolDescription"],label:"Copy the Description",description:"",multiline:!0}),(0,n.jsxs)(t,{children:[(0,n.jsx)(r,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:"Set the method to POST and copy the following Endpoint URL:"}),(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 25%"},children:(0,n.jsx)(s,{content:"POST",showCopyButton:!1})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(s,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`})})]})]})]}),(0,n.jsx)(r,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"3. Set Headers"}),(0,n.jsx)(r,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:"In the \u201CHeaders\u201D section click \u201CAdd header\u201D. Then, fill it as follows"}),(0,n.jsxs)("ul",{style:{marginTop:"12px",color:e.theme.palette.text[400],...e.theme.typography.body,listStyleType:"none",paddingLeft:"0px"},children:[(0,n.jsx)("li",{children:(0,n.jsx)(r,{sx:o=>({color:o.palette.text[400],...o.typography.body}),children:"Type \u2192 Value"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r,{sx:o=>({color:o.palette.text[400],...o.typography.body}),children:"Name \u2192 BUILDSHIP_API_KEY"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r,{sx:o=>({color:o.palette.text[400],...o.typography.body}),children:"Value \u2192  Copy this from the Tool API Key section on BuildShip (left panel)"})})]}),(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 50%"},children:(0,n.jsx)(s,{content:"BUILDSHIP_API_KEY"})}),(0,n.jsx)(t,{sx:{flex:"1 0 50%",width:"50%"},children:(0,n.jsx)(s,{content:e.triggerValues?.["config.apiKey"]})})]}),(0,n.jsx)(r,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"4. Enable Body Parameters"}),(0,n.jsx)(r,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:"Enable Body Parameters, click \u201CAdd property\u201D. And copy the data type, identifier and Description for each. Select the value type as \u201CDynamic Variable\u201D."}),te(e.inputs)]})},te=e=>{let{Box:t,ClipboardField:s,Typography:r}=h()||{};t||C("Box",!0),s||C("ClipboardField",!0),r||C("Typography",!0);let o=e?.properties||{},y=Object.entries(o).sort((p,c)=>{let l=p[1].buildship?.index??1/0,x=c[1].buildship?.index??1/0;return l-x});return(0,n.jsxs)(t,{sx:{marginTop:"12px"},children:[(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1},children:[(0,n.jsx)(t,{sx:{flex:"1 0 25%"},children:(0,n.jsx)(r,{sx:p=>({color:p.palette.text[400],...p.typography.body}),children:"Data type"})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(r,{sx:p=>({color:p.palette.text[400],...p.typography.body}),children:"Identifier"})})]}),y.map(([p,c])=>(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"column",flexGrow:1,gap:"2px",marginBottom:"8px"},children:[(0,n.jsxs)(t,{sx:{display:"flex",flexDirection:"row",flexGrow:1,gap:"8px",minHeight:"28px"},children:[(0,n.jsx)(t,{sx:{flex:"1 0 20%"},children:(0,n.jsx)(s,{content:c.type.charAt(0).toUpperCase()+c.type.slice(1),showCopyButton:!1})}),(0,n.jsx)(t,{sx:{flex:"1 0 75%",width:"75%"},children:(0,n.jsx)(s,{content:p})})]}),(0,n.jsx)(t,{sx:{flex:"1",width:"100%"},children:(0,n.jsx)(s,{content:c.description||"[No description provided]",description:"",multiline:!1})})]},p))]})};function C(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=m(w());var R=m(K());var O=e=>{let{Box:t,ClipboardTextArea:s,CodeMirror:r,CodeSamples:o,CopyButton:y,Typography:p}=h()||{};t||_("Box",!0),s||_("ClipboardTextArea",!0),r||_("CodeMirror",!0),o||_("CodeSamples",!0),y||_("CopyButton",!0),p||_("Typography",!0);let c=(0,R.useMemo)(()=>JSON.stringify(e.toolFlowToOpenApi([e.flow],e.host),null,2),[e.flow,e.host]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{sx:l=>({color:l.palette.text[900],...l.typography.headline6}),children:"Default Setup Guide"}),(0,d.jsx)(p,{sx:l=>({color:l.palette.text[400],marginTop:"4px",...l.typography.body}),children:"Each agent platform has its own setup process. Please select your specific agent from the options above. Below you'll find universal specifications that work across all agent platforms."}),(0,d.jsx)(p,{sx:l=>({color:l.palette.text[900],marginTop:"24px",...l.typography.body}),children:"OpenAPI Specification"}),(0,d.jsxs)(t,{sx:{position:"relative"},children:[(0,d.jsx)(t,{sx:{marginTop:"4px",maxHeight:"600px",overflow:"auto"},children:(0,d.jsx)(r,{value:c,onChange:()=>{},extensions:[e.cm.extensions.json()],codemirrorProps:{readOnly:!0,editable:!1},wrapLines:!0,containerSx:{"& .cm-editor":{borderRadius:"4px",backgroundColor:l=>l.palette.text[50]}}})}),(0,d.jsx)(y,{content:c,sx:{position:"absolute",right:16,top:8}})]}),(0,d.jsx)(p,{sx:l=>({color:l.palette.text[900],marginTop:"24px",...l.typography.body}),children:"Schema Definitions"}),(0,d.jsx)(p,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:"These JSON schemas define the expected input parameters and output formats for your tool. Use them to ensure proper data formatting and validation."}),(0,d.jsx)(o,{samples:[{code:JSON.stringify(e.simplifySchema(e.inputs),null,2),label:"Tool Input Schema",language:"json"},{code:JSON.stringify(e.simplifySchema(e.output),null,2),label:"Tool Output Schema",language:"json"}]}),(0,d.jsx)(p,{sx:l=>({marginTop:"24px",color:l.palette.text[900],...l.typography.body}),children:"API Endpoint"}),(0,d.jsxs)(p,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:["To invoke this tool, send a POST request to the endpoint below with your input parameters. Include your ",(0,d.jsx)("code",{children:"BUILDSHIP_API_KEY"})," in the request header for authentication."]}),(0,d.jsx)(s,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})]})};function _(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var f=m(w());var F=e=>{let{ClipboardTextArea:t,CodeSamples:s,Typography:r}=h()||{};t||P("ClipboardTextArea",!0),s||P("CodeSamples",!0),r||P("Typography",!0);let o=e.inputs.properties||{},y=(l=2)=>{let x=" ".repeat(l);return Object.entries(o).map(([T,k])=>{let a=k.type==="number"?"0":'""';return`${x}${T}: ${a}, // ${k.title||T}`}).join(`
`)},p=`const fetch = require('node-fetch');

/**
 * Function to call workflow using fetch
 * @param {object} params - Input parameters for the workflow
 * @param {string} apiKey - Your API key
 * @returns {Promise<object>} - The workflow result
 */
async function callWorkflow(params, apiKey) {
  const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error calling workflow:', error);
    throw error;
  }
}

// Example usage
async function main() {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  
  const params = {
${y()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

main();`,c=`import fetch from 'node-fetch';

interface WorkflowParams {
${Object.entries(e.inputs.properties||{}).map(([l,x])=>`  ${l}: ${x.type==="number"?"number":"string"}; // ${x.title||l}`).join(`
`)}
}

interface WorkflowResponse {
  // Add response type definitions based on your workflow output
  [key: string]: any;
}

/**
 * Function to call workflow using fetch
 * @param params - Input parameters for the workflow
 * @param apiKey - Your API key
 * @returns Promise resolving to the workflow result
 */
async function callWorkflow(params: WorkflowParams, apiKey: string): Promise<WorkflowResponse> {
  const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error calling workflow:', error);
    throw error;
  }
}

// Example usage
async function main() {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  
  const params: WorkflowParams = {
${y()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

main();`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{sx:l=>({...l.typography.headline6}),children:"Node.js Integration"}),(0,f.jsx)(r,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:"Make sure you have the node-fetch package installed:"}),(0,f.jsx)(t,{content:"npm install node-fetch@2",label:"",description:""}),(0,f.jsx)(r,{sx:l=>({marginTop:"16px",color:l.palette.text[400],...l.typography.body}),children:"Then use this code to call your workflow:"}),(0,f.jsx)(s,{samples:[{code:p,label:"Node.js",language:"js"},{code:c,label:"TypeScript",language:"ts"}]})]})};function P(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=m(w());var B=e=>{let{CodeSamples:t,Typography:s}=h()||{};t||L("CodeSamples",!0),s||L("Typography",!0);let r=e.inputs.properties||{},o=(c=2)=>{let l=" ".repeat(c);return Object.entries(r).map(([x,T])=>{let k=T.type==="number"?"0":'""';return`${l}${x}: ${k}, // ${T.title||x}`}).join(`
`)},y=`/**
 * Function to call workflow using fetch
 * @param {object} params - Input parameters for the workflow
 * @param {string} apiKey - Your API key
 * @returns {Promise<object>} - The workflow result
 */
async function callWorkflow(params, apiKey) {
  const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error calling workflow:', error);
    throw error;
  }
}

// Example usage
async function executeExample() {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  
  const params = {
${o()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`,p=`/**
 * Function to call workflow using fetch
 * @param {object} params - Input parameters for the workflow
 * @param {string} apiKey - Your API key
 * @returns {Promise<object>} - The workflow result
 */
async function callWorkflow(params: Record<string, any>, apiKey: string): Promise<any> {
  const url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}";
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': apiKey
      },
      body: JSON.stringify(params)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error calling workflow:', error);
    throw error;
  }
}

// Example usage
async function executeExample(): Promise<void> {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  
  const params = {
${o()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{sx:c=>({...c.typography.headline6}),children:"Web Browser Integration"}),(0,b.jsx)(s,{sx:c=>({marginTop:"4px",color:c.palette.text[400],...c.typography.body}),children:"Use this code to call your workflow from web applications:"}),(0,b.jsx)(t,{samples:[{code:y,label:"JavaScript",language:"js"},{code:p,label:"TypeScript",language:"ts"}]})]})};function L(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var g=m(w());var W=e=>{let{ClipboardTextArea:t,CodeSamples:s,Typography:r}=h()||{};t||S("ClipboardTextArea",!0),s||S("CodeSamples",!0),r||S("Typography",!0);let o=e.inputs.properties||{},y=()=>Object.entries(o).map(([c,l])=>{let x=l.type==="number"?"0":'""';return`    "${c}": ${x}, # ${l.title||c}`}).join(`
`),p=`import requests
import json

def call_workflow(params, api_key):
    """
    Function to call workflow using requests
    
    Args:
        params (dict): Input parameters for the workflow
        api_key (str): Your API key
        
    Returns:
        dict: The workflow result
    """
    url = "${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}"
    
    headers = {
        'Content-Type': 'application/json',
        'BUILDSHIP_API_KEY': api_key
    }
    
    try:
        response = requests.post(url, headers=headers, json=params)
        response.raise_for_status()  # Raise exception for 4XX/5XX status codes
        
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error calling workflow: {e}")
        raise

# Example usage
def main():
    api_key = "YOUR_API_KEY"  # Replace with your actual API key
    
    params = {
${y()}
    }
    
    try:
        result = call_workflow(params, api_key)
        print("Workflow result:", result)
        return result
    except Exception as e:
        print(f"Failed to execute workflow: {e}")

if __name__ == "__main__":
    main()`;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{sx:c=>({...c.typography.headline6}),children:"Python Integration"}),(0,g.jsx)(r,{sx:c=>({marginTop:"4px",color:c.palette.text[400],...c.typography.body}),children:"Make sure you have the requests library installed:"}),(0,g.jsx)(t,{content:"pip install requests",label:"",description:""}),(0,g.jsx)(r,{sx:c=>({marginTop:"16px",color:c.palette.text[400],...c.typography.body}),children:"Then use this code to call your workflow:"}),(0,g.jsx)(s,{samples:[{code:p,label:"Python",language:"js"}]})]})};function S(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var oe=void 0,U=e=>{let{Select:t,Typography:s}=h()||{};t||X("Select",!0),s||X("Typography",!0);let[r,o]=e.useState("generic-agent");function y(p){return p.replace(/(?:^\w|[A-Z]|\b\w)/g,function(c,l){return l===0?c.toLowerCase():c.toUpperCase()}).replace(/\s+/g,"")}return(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"22px"},children:[(0,u.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.modal,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[(0,u.jsx)(s,{sx:p=>({marginBottom:"8px",color:p.palette.text[900]}),children:"Select your agent builder"}),(0,u.jsx)(t,{value:r,onChange:p=>o(p.target.value),options:[{value:"11labs",render:"ElevenLabs"},{value:"claude",render:"Claude Desktop (MCP Server)"},{value:"nodejs",render:"Node.js Fetch Implementation"},{value:"python",render:"Python Requests Implementation"},{value:"web",render:"Web Browser Implementation"},{value:"generic-agent",render:"Default Setup Guide"}]})]}),(0,u.jsx)("div",{style:{marginTop:"16px"}}),(0,u.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.modal,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[r==="claude"&&(0,u.jsx)(j,{flowLabel:y(e.flowLabel??""),...e}),r==="11labs"&&(0,u.jsx)($,{...e}),r==="generic-agent"&&(0,u.jsx)(O,{...e}),r==="nodejs"&&(0,u.jsx)(F,{...e}),r==="python"&&(0,u.jsx)(W,{...e}),r==="web"&&(0,u.jsx)(B,{...e})]})]})};function Y(e){return(0,u.jsx)(U,{...e})}function H(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(Y,{...e})}):Y(e)}function X(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}return Z(re);})();
;return Component;