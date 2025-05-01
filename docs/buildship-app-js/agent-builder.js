var Component=(()=>{var H=Object.create;var j=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var V=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var E=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports),Z=(e,o)=>{for(var a in o)j(e,a,{get:o[a],enumerable:!0})},A=(e,o,a,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of G(o))!z.call(e,i)&&i!==a&&j(e,i,{get:()=>o[i],enumerable:!(t=q(o,i))||t.enumerable});return e};var g=(e,o,a)=>(a=e!=null?H(V(e)):{},A(o||!e||!e.__esModule?j(a,"default",{value:e,enumerable:!0}):a,e)),Q=e=>A(j({},"__esModule",{value:!0}),e);var w=E((ae,$)=>{$.exports=_jsx_runtime});var R=E((de,K)=>{K.exports=React});var re={};Z(re,{AgentSelector:()=>U,default:()=>J,frontmatter:()=>oe});var u=g(w());var{useMDXComponents:y}=MdxJsReact;var n=g(w());var ee=function(o){let{ClipboardField:a,ClipboardTextArea:t,Typography:i}=y()||{};a||I("ClipboardField",!0),t||I("ClipboardTextArea",!0),i||I("Typography",!0);let[h,c]=o.useState(""),p=o.triggerValues?.["config.apiKey"],l=o.projectId,f=o.flowId,T=o.flowLabel,k=p?o.triggerValues?.["config.toolName"]:"",_=`npx -y buildship-tools create-mcp-server --project ${l} --flows ${f} --apiKey ${p} --token ${h} --outputFolder ${k} --client claude`;return o.useEffect(()=>{o.getIdToken&&o.getIdToken().then(r=>r&&c(r))},[o.getIdToken]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:o.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/website-a1s39m.appspot.com/o/buildship-app-logos%2Fanthropic.png?alt=media&token=ec0eb8dc-f0d4-4f97-a144-023f1aa8118e",width:"16",height:"16"})}),(0,n.jsx)(i,{sx:r=>({...r.typography.headline6}),children:"Claude - Setup Guide"}),(0,n.jsx)("a",{href:"https://docs.buildship.tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(i,{sx:r=>({marginTop:"24px",...r.typography.body}),children:"Documentation \u2197"})}),(0,n.jsx)("a",{href:"https://docs.buildship.tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(i,{sx:r=>({marginTop:"8px",...r.typography.body}),children:"Video Tutorial \u2197"})}),(0,n.jsx)(i,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"Pre-requisite"}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:o.theme.palette.text[400],...o.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:["Ensure you have the ",(0,n.jsx)("a",{href:"https://claude.ai/download",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Claude Desktop"})," app installed"]})}),(0,n.jsx)("li",{children:(0,n.jsx)(i,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:'Use "Ship" button on top to deploy your workflow'})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:["You'll need to have ",(0,n.jsx)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Node.js installed"})," to run the commands"]})})]}),(0,n.jsx)(i,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"You can add the MCP tool to your Claude app using one of the following options."}),(0,n.jsx)(i,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"Option 1: Hosted on BuildShip"}),(0,n.jsx)(a,{content:_+" --proxy",label:"",description:"Recommended for easy hosted experience. Run the following command from a terminal or command line tool."}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"12px",color:o.theme.palette.text[400],...o.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:["After the command updates your Claude config, ",(0,n.jsx)("strong",{children:"restart the Claude Desktop app"})," (if it's open) to load the MCP tool added"]})}),(0,n.jsx)("li",{children:(0,n.jsx)(i,{sx:r=>({marginTop:"12px",color:r.palette.text[400],...r.typography.body}),children:"To test, Ask Claude to use the tool. Claude will ask for permission. Once you allow it, the tool will run and show the result."})})]}),(0,n.jsx)(i,{sx:r=>({marginTop:"12px",color:r.palette.text[400],...r.typography.body}),children:"You'll see it successfully updated Claude config when you see a 'Tool' icon within Claude Chat"}),(0,n.jsx)("img",{src:"https://storage.googleapis.com/buildship-2vqhlv-us-central1/tool-trigger-assets/claude-tool.png",width:"100%",height:"auto",style:{marginTop:"16px",borderRadius:"4px"}}),(0,n.jsx)(i,{sx:r=>({marginTop:"8px",color:r.palette.text[400],...r.typography.body}),children:"Note: Since the tool is hosted on BuildShip, it will use your BuildShip credits when executed."}),(0,n.jsx)(i,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"Option 2: Self hosted"}),(0,n.jsx)(i,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:"Run the following command \u2014 it will:"}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:o.theme.palette.text[400],...o.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsx)(i,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Convert the workflow into a JavaScript function"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Download the function to your local machine"})})]}),(0,n.jsx)(t,{content:_,label:"",description:""}),(0,n.jsx)(i,{sx:r=>({marginTop:"8px",color:r.palette.text[400],...r.typography.body}),children:"You can then connect the exported function to Claude using the MCP protocol."})]})};function te(e){return(0,n.jsx)(n.Fragment,{children:`
`})}function P(e={}){return(0,n.jsx)(ee,{...e,children:(0,n.jsx)(te,{...e})})}function I(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=g(w());var D=e=>{let{ClipboardTextArea:o,Typography:a}=y()||{};return o||M("ClipboardTextArea",!0),a||M("Typography",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{sx:t=>({...t.typography.headline6}),children:"ElevenLabs - Setup Guide"}),(0,s.jsx)(a,{sx:t=>({marginTop:"24px",color:t.palette.text[900],...t.typography.body}),children:"Single Tool Calling"}),(0,s.jsx)(a,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:"For ElevenLabs, if you have a set of tools you must add them one by one. Follow the steps to add tools:"}),(0,s.jsx)(a,{sx:t=>({marginTop:"24px",color:t.palette.text[900],...t.typography.body}),children:"1. Create a new tool"}),(0,s.jsx)(a,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:'Click "Add tool" from the AI Agent configuration panel. Select "Custom Tool" from the dropdown menu.'}),(0,s.jsx)(a,{sx:t=>({marginTop:"24px",color:t.palette.text[900],...t.typography.body}),children:"2. Configure the new tool"}),(0,s.jsx)(a,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:'Click "Add tool" from the AI Agent configuration panel. Select "Custom Tool" from the dropdown menu.'}),(0,s.jsxs)("div",{style:{marginLeft:"16px"},children:[(0,s.jsx)(a,{sx:t=>({marginTop:"16px",color:t.palette.text[900],...t.typography.body}),children:"2.a. Give your tool a name and a description"}),(0,s.jsx)(a,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:"You can copy the name and description from the left panel."}),(0,s.jsx)(a,{sx:t=>({marginTop:"16px",color:t.palette.text[900],...t.typography.body}),children:"2.b. Paste the URL and select the method as POST"}),(0,s.jsx)(a,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:(0,s.jsx)(o,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})}),(0,s.jsx)(a,{sx:t=>({marginTop:"16px",color:t.palette.text[900],...t.typography.body}),children:"2.c. Provide the following body parameters"}),(0,s.jsx)(a,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:"For all variables, select the value type as dynamic value."}),(0,s.jsx)(a,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Variable name"}),(0,s.jsx)("th",{children:"Data type"})]}),(0,s.jsx)("tbody",{children:Object.entries(e.inputs.properties).map(([t,i])=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:i.type})]}))})]})}),(0,s.jsx)(a,{sx:t=>({marginTop:"24px",color:t.palette.text[900],...t.typography.body}),children:"2.d. Add the API Key"}),(0,s.jsxs)(a,{sx:t=>({marginTop:"4px",color:t.palette.text[400],...t.typography.body}),children:['In the "Headers" section click "Add header". Select "Value" as type. Name your header as'," ",(0,s.jsx)("code",{children:"BUILDSHIP_API_KEY"}),' and copy the Tool API key to the "Value" field.']})]})]})};function M(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=g(w());var O=g(R());var F=e=>{let{Box:o,ClipboardTextArea:a,CodeMirror:t,CodeSamples:i,CopyButton:h,Typography:c}=y()||{};o||C("Box",!0),a||C("ClipboardTextArea",!0),t||C("CodeMirror",!0),i||C("CodeSamples",!0),h||C("CopyButton",!0),c||C("Typography",!0);let p=(0,O.useMemo)(()=>JSON.stringify(e.toolFlowToOpenApi([e.flow],e.host),null,2),[e.flow,e.host]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{sx:l=>({color:l.palette.text[900],...l.typography.headline6}),children:"Default Setup Guide"}),(0,d.jsx)(c,{sx:l=>({color:l.palette.text[400],marginTop:"4px",...l.typography.body}),children:"Each agent platform has its own setup process. Please select your specific agent from the options above. Below you'll find universal specifications that work across all agent platforms."}),(0,d.jsx)(c,{sx:l=>({color:l.palette.text[900],marginTop:"24px",...l.typography.body}),children:"OpenAPI Specification"}),(0,d.jsxs)(o,{sx:{position:"relative"},children:[(0,d.jsx)(o,{sx:{marginTop:"4px",maxHeight:"600px",overflow:"auto"},children:(0,d.jsx)(t,{value:p,onChange:()=>{},extensions:[e.cm.extensions.json()],codemirrorProps:{readOnly:!0,editable:!1},wrapLines:!0})}),(0,d.jsx)(h,{content:p,sx:{position:"absolute",right:16,top:8}})]}),(0,d.jsx)(c,{sx:l=>({color:l.palette.text[900],marginTop:"24px",...l.typography.body}),children:"Schema Definitions"}),(0,d.jsx)(c,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:"These JSON schemas define the expected input parameters and output formats for your tool. Use them to ensure proper data formatting and validation."}),(0,d.jsx)(i,{samples:[{code:JSON.stringify(e.simplifySchema(e.inputs),null,2),label:"Tool Input Schema",language:"json"},{code:JSON.stringify(e.simplifySchema(e.output),null,2),label:"Tool Output Schema",language:"json"}]}),(0,d.jsx)(c,{sx:l=>({marginTop:"24px",color:l.palette.text[900],...l.typography.body}),children:"API Endpoint"}),(0,d.jsxs)(c,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:["To invoke this tool, send a POST request to the endpoint below with your input parameters. Include your ",(0,d.jsx)("code",{children:"BUILDSHIP_API_KEY"})," in the request header for authentication."]}),(0,d.jsx)(a,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})]})};function C(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var x=g(w());var L=e=>{let{ClipboardTextArea:o,CodeSamples:a,Typography:t}=y()||{};o||S("ClipboardTextArea",!0),a||S("CodeSamples",!0),t||S("Typography",!0);let i=e.inputs.properties||{},h=(l=2)=>{let f=" ".repeat(l);return Object.entries(i).map(([T,k])=>{let _=k.type==="number"?"0":'""';return`${f}${T}: ${_}, // ${k.title||T}`}).join(`
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
${h()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

main();`,p=`import fetch from 'node-fetch';

interface WorkflowParams {
${Object.entries(e.inputs.properties||{}).map(([l,f])=>`  ${l}: ${f.type==="number"?"number":"string"}; // ${f.title||l}`).join(`
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
${h()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

main();`;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t,{sx:l=>({...l.typography.headline6}),children:"Node.js Integration"}),(0,x.jsx)(t,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:"Make sure you have the node-fetch package installed:"}),(0,x.jsx)(o,{content:"npm install node-fetch@2",label:"",description:""}),(0,x.jsx)(t,{sx:l=>({marginTop:"16px",color:l.palette.text[400],...l.typography.body}),children:"Then use this code to call your workflow:"}),(0,x.jsx)(a,{samples:[{code:c,label:"Node.js",language:"js"},{code:p,label:"TypeScript",language:"ts"}]})]})};function S(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=g(w());var Y=e=>{let{CodeSamples:o,Typography:a}=y()||{};o||W("CodeSamples",!0),a||W("Typography",!0);let t=e.inputs.properties||{},i=(p=2)=>{let l=" ".repeat(p);return Object.entries(t).map(([f,T])=>{let k=T.type==="number"?"0":'""';return`${l}${f}: ${k}, // ${T.title||f}`}).join(`
`)},h=`/**
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
${i()}
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
${i()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{sx:p=>({...p.typography.headline6}),children:"Web Browser Integration"}),(0,b.jsx)(a,{sx:p=>({marginTop:"4px",color:p.palette.text[400],...p.typography.body}),children:"Use this code to call your workflow from web applications:"}),(0,b.jsx)(o,{samples:[{code:h,label:"JavaScript",language:"js"},{code:c,label:"TypeScript",language:"ts"}]})]})};function W(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=g(w());var X=e=>{let{ClipboardTextArea:o,CodeSamples:a,Typography:t}=y()||{};o||v("ClipboardTextArea",!0),a||v("CodeSamples",!0),t||v("Typography",!0);let i=e.inputs.properties||{},h=()=>Object.entries(i).map(([p,l])=>{let f=l.type==="number"?"0":'""';return`    "${p}": ${f}, # ${l.title||p}`}).join(`
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
${h()}
    }
    
    try:
        result = call_workflow(params, api_key)
        print("Workflow result:", result)
        return result
    except Exception as e:
        print(f"Failed to execute workflow: {e}")

if __name__ == "__main__":
    main()`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t,{sx:p=>({...p.typography.headline6}),children:"Python Integration"}),(0,m.jsx)(t,{sx:p=>({marginTop:"4px",color:p.palette.text[400],...p.typography.body}),children:"Make sure you have the requests library installed:"}),(0,m.jsx)(o,{content:"pip install requests",label:"",description:""}),(0,m.jsx)(t,{sx:p=>({marginTop:"16px",color:p.palette.text[400],...p.typography.body}),children:"Then use this code to call your workflow:"}),(0,m.jsx)(a,{samples:[{code:c,label:"Python",language:"js"}]})]})};function v(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var oe=void 0,U=e=>{let{Select:o,Typography:a}=y()||{};o||N("Select",!0),a||N("Typography",!0);let[t,i]=e.useState("generic-agent");function h(c){return c.replace(/(?:^\w|[A-Z]|\b\w)/g,function(p,l){return l===0?p.toLowerCase():p.toUpperCase()}).replace(/\s+/g,"")}return(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"22px"},children:[(0,u.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.sections,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[(0,u.jsx)(a,{sx:c=>({marginBottom:"8px",color:c.palette.text[900]}),children:"Select your agent builder"}),(0,u.jsx)(o,{value:t,onChange:c=>i(c.target.value),options:[{value:"11labs",render:"ElevenLabs"},{value:"claude",render:"Claude Desktop (MCP Server)"},{value:"nodejs",render:"Node.js Fetch Implementation"},{value:"python",render:"Python Requests Implementation"},{value:"web",render:"Web Browser Implementation"},{value:"generic-agent",render:"Default Setup Guide"}]})]}),(0,u.jsx)("div",{style:{marginTop:"16px"}}),(0,u.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.sections,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[t==="claude"&&(0,u.jsx)(P,{flowLabel:h(e.flowLabel??""),...e}),t==="11labs"&&(0,u.jsx)(D,{...e}),t==="generic-agent"&&(0,u.jsx)(F,{...e}),t==="nodejs"&&(0,u.jsx)(L,{...e}),t==="python"&&(0,u.jsx)(X,{...e}),t==="web"&&(0,u.jsx)(Y,{...e})]})]})};function B(e){return(0,u.jsx)(U,{...e})}function J(e={}){let{wrapper:o}={...y(),...e.components};return o?(0,u.jsx)(o,{...e,children:(0,u.jsx)(B,{...e})}):B(e)}function N(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}return Q(re);})();
;return Component;