var Component=(()=>{var q=Object.create;var I=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var A=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Q=(e,o)=>{for(var r in o)I(e,r,{get:o[r],enumerable:!0})},$=(e,o,r,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let p of V(o))!z.call(e,p)&&p!==r&&I(e,p,{get:()=>o[p],enumerable:!(t=G(o,p))||t.enumerable});return e};var g=(e,o,r)=>(r=e!=null?q(Z(e)):{},$(o||!e||!e.__esModule?I(r,"default",{value:e,enumerable:!0}):r,e)),ee=e=>$(I({},"__esModule",{value:!0}),e);var w=A((ie,M)=>{M.exports=_jsx_runtime});var O=A((ue,F)=>{F.exports=React});var ne={};Q(ne,{AgentSelector:()=>J,default:()=>N,frontmatter:()=>re});var y=g(w());var{useMDXComponents:f}=MdxJsReact;var l=g(w());var te=function(o){let{Box:r,ClipboardTextArea:t,SvgIcon:p,Typography:d}=f()||{};r||_("Box",!0),t||_("ClipboardTextArea",!0),p||_("SvgIcon",!0),d||_("Typography",!0);let[c,i]=o.useState(""),n=o.triggerValues?.["config.apiKey"],h=o.projectId,k=o.flowId,T=o.flowLabel,j=n?o.triggerValues?.["config.toolName"]:"",E=`npx -y buildship-tools create-mcp-server --project ${h} --flows ${k} --apiKey ${n} --token ${c} --outputFolder ${j} --client claude`;return o.useEffect(()=>{o.getIdToken&&o.getIdToken().then(s=>s&&i(s))},[o.getIdToken]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{sx:s=>({...s.typography.headline6}),children:"Claude - Setup Guide"}),(0,l.jsx)(d,{sx:s=>({marginTop:"24px",color:s.palette.text[900],...s.typography.body}),children:"Hosted on BuildShip"}),(0,l.jsx)(d,{sx:s=>({marginTop:"4px",color:s.palette.text[400],...s.typography.body}),children:"Make sure the workflow is shipped and you have the Claude desktop app installed. Run the following command to add this tool to your Claude app."}),(0,l.jsx)(t,{content:E+" --proxy",label:"",description:""}),(0,l.jsx)(d,{sx:s=>({marginTop:"8px",color:s.palette.text[400],...s.typography.body}),children:"'Hosted on BuildShip' means that Claude will ask BuildShip to execute the tool and your credits will be deducted on each execution."}),(0,l.jsx)(d,{sx:s=>({marginTop:"24px",color:s.palette.text[900],...s.typography.body}),children:"Self hosted"}),(0,l.jsxs)(d,{sx:s=>({marginTop:"4px",color:s.palette.text[400],...s.typography.body}),children:["The following command will: ",(0,l.jsx)("br",{}),"- Convert the workflow into a JavaScript function ",(0,l.jsx)("br",{}),"- Connect the exported function with Claude using the MCP protocol"]}),(0,l.jsx)(t,{content:E,label:"",description:""}),(0,l.jsx)(d,{sx:s=>({marginTop:"8px",color:s.palette.text[400],...s.typography.body}),children:"For self-hosted option, you will not be charged credits. This option is experimental and some complex workflows may not work."}),(0,l.jsxs)(r,{sx:s=>({display:"flex",alignItems:"flex-start",marginTop:"24px",color:s.palette.text[400]}),children:[(0,l.jsx)(p,{sx:{width:16,height:16},children:(0,l.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",fill:"currentColor"})})}),(0,l.jsxs)(d,{sx:s=>({marginLeft:"4px",...s.typography.body}),children:[(0,l.jsx)("code",{children:"npm"})," is required to run the command. If you don't have it installed, please follow the"," ",(0,l.jsx)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"this link"})," ","to install it."]})]})]})};function oe(e){return(0,l.jsx)(l.Fragment,{children:`
`})}function S(e={}){return(0,l.jsx)(te,{...e,children:(0,l.jsx)(oe,{...e})})}function _(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var a=g(w());var K=e=>{let{ClipboardTextArea:o,Typography:r}=f()||{};return o||D("ClipboardTextArea",!0),r||D("Typography",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{sx:t=>({...t.typography.headline6}),children:"ElevenLabs - Setup Guide"}),(0,a.jsx)(r,{sx:t=>({marginTop:"24px",color:t.palette.text[900],...t.typography.body}),children:"Single Tool Calling"}),(0,a.jsx)(r,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:"For ElevenLabs, if you have a set of tools you must add them one by one. Follow the steps to add tools:"}),(0,a.jsx)(r,{sx:t=>({marginTop:"24px",color:t.palette.text[900],...t.typography.body}),children:"1. Create a new tool"}),(0,a.jsx)(r,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:'Click "Add tool" from the AI Agent configuration panel. Select "Custom Tool" from the dropdown menu.'}),(0,a.jsx)(r,{sx:t=>({marginTop:"24px",color:t.palette.text[900],...t.typography.body}),children:"2. Configure the new tool"}),(0,a.jsx)(r,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:'Click "Add tool" from the AI Agent configuration panel. Select "Custom Tool" from the dropdown menu.'}),(0,a.jsxs)("div",{style:{marginLeft:"16px"},children:[(0,a.jsx)(r,{sx:t=>({marginTop:"16px",color:t.palette.text[900],...t.typography.body}),children:"2.a. Give your tool a name and a description"}),(0,a.jsx)(r,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:"You can copy the name and description from the left panel."}),(0,a.jsx)(r,{sx:t=>({marginTop:"16px",color:t.palette.text[900],...t.typography.body}),children:"2.b. Paste the URL and select the method as POST"}),(0,a.jsx)(r,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:(0,a.jsx)(o,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})}),(0,a.jsx)(r,{sx:t=>({marginTop:"16px",color:t.palette.text[900],...t.typography.body}),children:"2.c. Provide the following body parameters"}),(0,a.jsx)(r,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:"For all variables, select the value type as dynamic value."}),(0,a.jsx)(r,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:(0,a.jsxs)("table",{children:[(0,a.jsxs)("thead",{children:[(0,a.jsx)("th",{children:"Variable name"}),(0,a.jsx)("th",{children:"Data type"})]}),(0,a.jsx)("tbody",{children:Object.entries(e.inputs.properties).map(([t,p])=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:t}),(0,a.jsx)("td",{children:p.type})]}))})]})}),(0,a.jsx)(r,{sx:t=>({marginTop:"24px",color:t.palette.text[900],...t.typography.body}),children:"2.d. Add the API Key"}),(0,a.jsxs)(r,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:['In the "Headers" section click "Add header". Select "Value" as type. Name your header as'," ",(0,a.jsx)("code",{children:"BUILDSHIP_API_KEY"}),' and copy the Tool API key to the "Value" field.']})]})]})};function D(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=g(w());var R=g(O());var L=e=>{let{Box:o,ClipboardTextArea:r,CodeMirror:t,CodeSamples:p,CopyButton:d,Typography:c}=f()||{};o||C("Box",!0),r||C("ClipboardTextArea",!0),t||C("CodeMirror",!0),p||C("CodeSamples",!0),d||C("CopyButton",!0),c||C("Typography",!0);let i=(0,R.useMemo)(()=>JSON.stringify(e.toolFlowToOpenApi([e.flow],e.host),null,2),[e.flow,e.host]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{sx:n=>({color:n.palette.text[900],...n.typography.headline6}),children:"Default Setup Guide"}),(0,u.jsx)(c,{sx:n=>({color:n.palette.text[400],marginTop:"4px",...n.typography.body}),children:"Each agent platform has its own setup process. Please select your specific agent from the options above. Below you'll find universal specifications that work across all agent platforms."}),(0,u.jsx)(c,{sx:n=>({color:n.palette.text[900],marginTop:"24px",...n.typography.body}),children:"OpenAPI Specification"}),(0,u.jsxs)(o,{sx:{position:"relative"},children:[(0,u.jsx)(o,{sx:{marginTop:"4px",maxHeight:"600px",overflow:"auto"},children:(0,u.jsx)(t,{value:i,onChange:()=>{},extensions:[e.cm.extensions.json()],codemirrorProps:{readOnly:!0,editable:!1},wrapLines:!0})}),(0,u.jsx)(d,{content:i,sx:{position:"absolute",right:16,top:8}})]}),(0,u.jsx)(c,{sx:n=>({color:n.palette.text[900],marginTop:"24px",...n.typography.body}),children:"Schema Definitions"}),(0,u.jsx)(c,{sx:n=>({marginTop:"4px",color:n.palette.text[400],...n.typography.body}),children:"These JSON schemas define the expected input parameters and output formats for your tool. Use them to ensure proper data formatting and validation."}),(0,u.jsx)(p,{samples:[{code:JSON.stringify(e.simplifySchema(e.inputs),null,2),label:"Tool Input Schema",language:"json"},{code:JSON.stringify(e.simplifySchema(e.output),null,2),label:"Tool Output Schema",language:"json"}]}),(0,u.jsx)(c,{sx:n=>({marginTop:"24px",color:n.palette.text[900],...n.typography.body}),children:"API Endpoint"}),(0,u.jsxs)(c,{sx:n=>({marginTop:"4px",color:n.palette.text[400],...n.typography.body}),children:["To invoke this tool, send a POST request to the endpoint below with your input parameters. Include your ",(0,u.jsx)("code",{children:"BUILDSHIP_API_KEY"})," in the request header for authentication."]}),(0,u.jsx)(r,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})]})};function C(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=g(w());var W=e=>{let{ClipboardTextArea:o,CodeSamples:r,Typography:t}=f()||{};o||P("ClipboardTextArea",!0),r||P("CodeSamples",!0),t||P("Typography",!0);let p=e.inputs.properties||{},d=(n=2)=>{let h=" ".repeat(n);return Object.entries(p).map(([k,T])=>{let j=T.type==="number"?"0":'""';return`${h}${k}: ${j}, // ${T.title||k}`}).join(`
`)},c=`const fetch = require('node-fetch');

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
${d()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

main();`,i=`import fetch from 'node-fetch';

interface WorkflowParams {
${Object.entries(e.inputs.properties||{}).map(([n,h])=>`  ${n}: ${h.type==="number"?"number":"string"}; // ${h.title||n}`).join(`
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
${d()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

main();`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t,{sx:n=>({...n.typography.headline6}),children:"Node.js Integration"}),(0,m.jsx)(t,{sx:n=>({marginTop:"4px",color:n.palette.text[400],...n.typography.body}),children:"Make sure you have the node-fetch package installed:"}),(0,m.jsx)(o,{content:"npm install node-fetch@2",label:"",description:""}),(0,m.jsx)(t,{sx:n=>({marginTop:"16px",color:n.palette.text[400],...n.typography.body}),children:"Then use this code to call your workflow:"}),(0,m.jsx)(r,{samples:[{code:c,label:"Node.js",language:"js"},{code:i,label:"TypeScript",language:"ts"}]})]})};function P(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=g(w());var Y=e=>{let{CodeSamples:o,Typography:r}=f()||{};o||X("CodeSamples",!0),r||X("Typography",!0);let t=e.inputs.properties||{},p=(i=2)=>{let n=" ".repeat(i);return Object.entries(t).map(([h,k])=>{let T=k.type==="number"?"0":'""';return`${n}${h}: ${T}, // ${k.title||h}`}).join(`
`)},d=`/**
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
${p()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`,c=`/**
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
${p()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{sx:i=>({...i.typography.headline6}),children:"Web Browser Integration"}),(0,b.jsx)(r,{sx:i=>({marginTop:"4px",color:i.palette.text[400],...i.typography.body}),children:"Use this code to call your workflow from web applications:"}),(0,b.jsx)(o,{samples:[{code:d,label:"JavaScript",language:"js"},{code:c,label:"TypeScript",language:"ts"}]})]})};function X(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var x=g(w());var B=e=>{let{ClipboardTextArea:o,CodeSamples:r,Typography:t}=f()||{};o||v("ClipboardTextArea",!0),r||v("CodeSamples",!0),t||v("Typography",!0);let p=e.inputs.properties||{},d=()=>Object.entries(p).map(([i,n])=>{let h=n.type==="number"?"0":'""';return`    "${i}": ${h}, # ${n.title||i}`}).join(`
`),c=`import requests
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
${d()}
    }
    
    try:
        result = call_workflow(params, api_key)
        print("Workflow result:", result)
        return result
    except Exception as e:
        print(f"Failed to execute workflow: {e}")

if __name__ == "__main__":
    main()`;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t,{sx:i=>({...i.typography.headline6}),children:"Python Integration"}),(0,x.jsx)(t,{sx:i=>({marginTop:"4px",color:i.palette.text[400],...i.typography.body}),children:"Make sure you have the requests library installed:"}),(0,x.jsx)(o,{content:"pip install requests",label:"",description:""}),(0,x.jsx)(t,{sx:i=>({marginTop:"16px",color:i.palette.text[400],...i.typography.body}),children:"Then use this code to call your workflow:"}),(0,x.jsx)(r,{samples:[{code:c,label:"Python",language:"js"}]})]})};function v(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var re=void 0,J=e=>{let{Select:o,Typography:r}=f()||{};o||H("Select",!0),r||H("Typography",!0);let[t,p]=e.useState("generic-agent");function d(c){return c.replace(/(?:^\w|[A-Z]|\b\w)/g,function(i,n){return n===0?i.toLowerCase():i.toUpperCase()}).replace(/\s+/g,"")}return(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"22px"},children:[(0,y.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.sections,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[(0,y.jsx)(r,{sx:c=>({marginBottom:"8px",color:c.palette.text[900]}),children:"Select your agent builder"}),(0,y.jsx)(o,{value:t,onChange:c=>p(c.target.value),options:[{value:"11labs",render:"ElevenLabs"},{value:"claude",render:"Claude Desktop (MCP Server)"},{value:"nodejs",render:"Node.js Fetch Implementation"},{value:"python",render:"Python Requests Implementation"},{value:"web",render:"Web Browser Implementation"},{value:"generic-agent",render:"Default Setup Guide"}]})]}),(0,y.jsx)("div",{style:{marginTop:"16px"}}),(0,y.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.sections,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[t==="claude"&&(0,y.jsx)(S,{flowLabel:d(e.flowLabel??""),...e}),t==="11labs"&&(0,y.jsx)(K,{...e}),t==="generic-agent"&&(0,y.jsx)(L,{...e}),t==="nodejs"&&(0,y.jsx)(W,{...e}),t==="python"&&(0,y.jsx)(B,{...e}),t==="web"&&(0,y.jsx)(Y,{...e})]})]})};function U(e){return(0,y.jsx)(J,{...e})}function N(e={}){let{wrapper:o}={...f(),...e.components};return o?(0,y.jsx)(o,{...e,children:(0,y.jsx)(U,{...e})}):U(e)}function H(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}return ee(ne);})();
;return Component;