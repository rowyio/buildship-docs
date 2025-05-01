var Component=(()=>{var J=Object.create;var _=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty;var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),z=(e,t)=>{for(var a in t)_(e,a,{get:t[a],enumerable:!0})},v=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of q(t))!V.call(e,c)&&c!==a&&_(e,c,{get:()=>t[c],enumerable:!(o=H(t,c))||o.enumerable});return e};var g=(e,t,a)=>(a=e!=null?J(G(e)):{},v(t||!e||!e.__esModule?_(a,"default",{value:e,enumerable:!0}):a,e)),Z=e=>v(_({},"__esModule",{value:!0}),e);var w=S((ne,E)=>{E.exports=_jsx_runtime});var K=S((ce,D)=>{D.exports=React});var te={};z(te,{AgentSelector:()=>N,default:()=>U,frontmatter:()=>oe});var u=g(w());var{useMDXComponents:y}=MdxJsReact;var n=g(w());var Q=function(t){let{ClipboardField:a,Typography:o}=y()||{};a||A("ClipboardField",!0),o||A("Typography",!0);let[c,h]=t.useState(""),p=t.triggerValues?.["config.apiKey"],s=t.projectId,l=t.flowId,f=t.flowLabel,T=p?t.triggerValues?.["config.toolName"]:"",k=`npx -y buildship-tools create-mcp-server --project ${s} --flows ${l} --apiKey ${p} --token ${c} --outputFolder ${T} --client claude`;return t.useEffect(()=>{t.getIdToken&&t.getIdToken().then(r=>r&&h(r))},[t.getIdToken]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{display:"flex",padding:"8px",backgroundColor:t.theme.palette.text[50],borderRadius:"8px",width:"fit-content",marginBottom:"16px"},children:(0,n.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/website-a1s39m.appspot.com/o/buildship-app-logos%2Fanthropic.png?alt=media&token=ec0eb8dc-f0d4-4f97-a144-023f1aa8118e",width:"16",height:"16"})}),(0,n.jsx)(o,{sx:r=>({...r.typography.headline6}),children:"Claude MCP - Setup Guide"}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o,{sx:r=>({marginTop:"24px",...r.typography.body}),children:"Documentation \u2197"})}),(0,n.jsx)("a",{href:"https://docs.buildship.com/tools/claude",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o,{sx:r=>({marginTop:"8px",...r.typography.body}),children:"Video Tutorial \u2197"})}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"Pre-requisite"}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsxs)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:["Ensure you have the ",(0,n.jsx)("a",{href:"https://claude.ai/download",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Claude Desktop"})," app installed"]})}),(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:'Use "Ship" button on top to deploy your workflow'})}),(0,n.jsx)("li",{children:(0,n.jsxs)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:["You'll need to have ",(0,n.jsx)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"inherit"},children:"Node.js installed"})," to run the commands"]})})]}),(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"You can add the MCP tool to your Claude app using one of the following options."}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"Option 1: Hosted on BuildShip"}),(0,n.jsx)(a,{content:k+" --proxy",label:"",description:"Recommended for easy hosted experience. Run the following command from a terminal or command line tool."}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"12px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsxs)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:["After the command updates your Claude config, ",(0,n.jsx)("strong",{children:"restart the Claude Desktop app"})," (if it's open) to load the MCP tool added"]})}),(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({marginTop:"12px",color:r.palette.text[400],...r.typography.body}),children:"To test, Ask Claude to use the tool. Claude will ask for permission. Once you allow it, the tool will run and show the result."})})]}),(0,n.jsx)(o,{sx:r=>({marginTop:"12px",color:r.palette.text[400],...r.typography.body}),children:"You'll see it successfully updated Claude config when you see a 'Tool' icon within Claude Chat"}),(0,n.jsx)("img",{src:"https://storage.googleapis.com/buildship-2vqhlv-us-central1/tool-trigger-assets/claude-tool.png",width:"100%",height:"auto",style:{marginTop:"16px",borderRadius:"4px"}}),(0,n.jsx)(o,{sx:r=>({marginTop:"8px",color:r.palette.text[400],...r.typography.body}),children:"Note: Since the tool is hosted on BuildShip, it will use your BuildShip credits when executed."}),(0,n.jsx)(o,{sx:r=>({marginTop:"24px",color:r.palette.text[900],...r.typography.body}),children:"Option 2: Self hosted"}),(0,n.jsx)(o,{sx:r=>({marginTop:"4px",color:r.palette.text[400],...r.typography.body}),children:"Run the following command \u2014 it will:"}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px",marginTop:"4px",color:t.theme.palette.text[400],...t.theme.typography.body},children:[(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Convert the workflow into a JavaScript function"})}),(0,n.jsx)("li",{children:(0,n.jsx)(o,{sx:r=>({color:r.palette.text[400],...r.typography.body}),children:"Download the function to your local machine"})})]}),(0,n.jsx)(a,{content:k,label:"",description:""}),(0,n.jsx)(o,{sx:r=>({marginTop:"8px",color:r.palette.text[400],...r.typography.body}),children:"You can then connect the exported function to Claude using the MCP protocol."})]})};function ee(e){return(0,n.jsx)(n.Fragment,{children:`
`})}function j(e={}){return(0,n.jsx)(Q,{...e,children:(0,n.jsx)(ee,{...e})})}function A(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=g(w());var M=e=>{let{ClipboardTextArea:t,Typography:a}=y()||{};return t||$("ClipboardTextArea",!0),a||$("Typography",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{sx:o=>({...o.typography.headline6}),children:"ElevenLabs - Setup Guide"}),(0,i.jsx)(a,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"Single Tool Calling"}),(0,i.jsx)(a,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:"For ElevenLabs, if you have a set of tools you must add them one by one. Follow the steps to add tools:"}),(0,i.jsx)(a,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"1. Create a new tool"}),(0,i.jsx)(a,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:'Click "Add tool" from the AI Agent configuration panel. Select "Custom Tool" from the dropdown menu.'}),(0,i.jsx)(a,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"2. Configure the new tool"}),(0,i.jsx)(a,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:'Click "Add tool" from the AI Agent configuration panel. Select "Custom Tool" from the dropdown menu.'}),(0,i.jsxs)("div",{style:{marginLeft:"16px"},children:[(0,i.jsx)(a,{sx:o=>({marginTop:"16px",color:o.palette.text[900],...o.typography.body}),children:"2.a. Give your tool a name and a description"}),(0,i.jsx)(a,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:"You can copy the name and description from the left panel."}),(0,i.jsx)(a,{sx:o=>({marginTop:"16px",color:o.palette.text[900],...o.typography.body}),children:"2.b. Paste the URL and select the method as POST"}),(0,i.jsx)(a,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:(0,i.jsx)(t,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})}),(0,i.jsx)(a,{sx:o=>({marginTop:"16px",color:o.palette.text[900],...o.typography.body}),children:"2.c. Provide the following body parameters"}),(0,i.jsx)(a,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:"For all variables, select the value type as dynamic value."}),(0,i.jsx)(a,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Variable name"}),(0,i.jsx)("th",{children:"Data type"})]}),(0,i.jsx)("tbody",{children:Object.entries(e.inputs.properties).map(([o,c])=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:o}),(0,i.jsx)("td",{children:c.type})]}))})]})}),(0,i.jsx)(a,{sx:o=>({marginTop:"24px",color:o.palette.text[900],...o.typography.body}),children:"2.d. Add the API Key"}),(0,i.jsxs)(a,{sx:o=>({marginTop:"4px",color:o.palette.text[400],...o.typography.body}),children:['In the "Headers" section click "Add header". Select "Value" as type. Name your header as'," ",(0,i.jsx)("code",{children:"BUILDSHIP_API_KEY"}),' and copy the Tool API key to the "Value" field.']})]})]})};function $(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=g(w());var R=g(K());var O=e=>{let{Box:t,ClipboardTextArea:a,CodeMirror:o,CodeSamples:c,CopyButton:h,Typography:p}=y()||{};t||C("Box",!0),a||C("ClipboardTextArea",!0),o||C("CodeMirror",!0),c||C("CodeSamples",!0),h||C("CopyButton",!0),p||C("Typography",!0);let s=(0,R.useMemo)(()=>JSON.stringify(e.toolFlowToOpenApi([e.flow],e.host),null,2),[e.flow,e.host]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{sx:l=>({color:l.palette.text[900],...l.typography.headline6}),children:"Default Setup Guide"}),(0,d.jsx)(p,{sx:l=>({color:l.palette.text[400],marginTop:"4px",...l.typography.body}),children:"Each agent platform has its own setup process. Please select your specific agent from the options above. Below you'll find universal specifications that work across all agent platforms."}),(0,d.jsx)(p,{sx:l=>({color:l.palette.text[900],marginTop:"24px",...l.typography.body}),children:"OpenAPI Specification"}),(0,d.jsxs)(t,{sx:{position:"relative"},children:[(0,d.jsx)(t,{sx:{marginTop:"4px",maxHeight:"600px",overflow:"auto"},children:(0,d.jsx)(o,{value:s,onChange:()=>{},extensions:[e.cm.extensions.json()],codemirrorProps:{readOnly:!0,editable:!1},wrapLines:!0})}),(0,d.jsx)(h,{content:s,sx:{position:"absolute",right:16,top:8}})]}),(0,d.jsx)(p,{sx:l=>({color:l.palette.text[900],marginTop:"24px",...l.typography.body}),children:"Schema Definitions"}),(0,d.jsx)(p,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:"These JSON schemas define the expected input parameters and output formats for your tool. Use them to ensure proper data formatting and validation."}),(0,d.jsx)(c,{samples:[{code:JSON.stringify(e.simplifySchema(e.inputs),null,2),label:"Tool Input Schema",language:"json"},{code:JSON.stringify(e.simplifySchema(e.output),null,2),label:"Tool Output Schema",language:"json"}]}),(0,d.jsx)(p,{sx:l=>({marginTop:"24px",color:l.palette.text[900],...l.typography.body}),children:"API Endpoint"}),(0,d.jsxs)(p,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:["To invoke this tool, send a POST request to the endpoint below with your input parameters. Include your ",(0,d.jsx)("code",{children:"BUILDSHIP_API_KEY"})," in the request header for authentication."]}),(0,d.jsx)(a,{content:`${e.host}/executeWorkflow/${e.flowId}/${e.trigger.id}`,label:"",description:""})]})};function C(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=g(w());var F=e=>{let{ClipboardTextArea:t,CodeSamples:a,Typography:o}=y()||{};t||I("ClipboardTextArea",!0),a||I("CodeSamples",!0),o||I("Typography",!0);let c=e.inputs.properties||{},h=(l=2)=>{let f=" ".repeat(l);return Object.entries(c).map(([T,k])=>{let r=k.type==="number"?"0":'""';return`${f}${T}: ${r}, // ${k.title||T}`}).join(`
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

main();`,s=`import fetch from 'node-fetch';

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

main();`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{sx:l=>({...l.typography.headline6}),children:"Node.js Integration"}),(0,m.jsx)(o,{sx:l=>({marginTop:"4px",color:l.palette.text[400],...l.typography.body}),children:"Make sure you have the node-fetch package installed:"}),(0,m.jsx)(t,{content:"npm install node-fetch@2",label:"",description:""}),(0,m.jsx)(o,{sx:l=>({marginTop:"16px",color:l.palette.text[400],...l.typography.body}),children:"Then use this code to call your workflow:"}),(0,m.jsx)(a,{samples:[{code:p,label:"Node.js",language:"js"},{code:s,label:"TypeScript",language:"ts"}]})]})};function I(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=g(w());var W=e=>{let{CodeSamples:t,Typography:a}=y()||{};t||L("CodeSamples",!0),a||L("Typography",!0);let o=e.inputs.properties||{},c=(s=2)=>{let l=" ".repeat(s);return Object.entries(o).map(([f,T])=>{let k=T.type==="number"?"0":'""';return`${l}${f}: ${k}, // ${T.title||f}`}).join(`
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
${c()}
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
${c()}
  };
  
  try {
    const result = await callWorkflow(params, apiKey);
    console.log('Workflow result:', result);
    return result;
  } catch (error) {
    console.error('Failed to execute workflow:', error);
  }
}

executeExample();`;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{sx:s=>({...s.typography.headline6}),children:"Web Browser Integration"}),(0,b.jsx)(a,{sx:s=>({marginTop:"4px",color:s.palette.text[400],...s.typography.body}),children:"Use this code to call your workflow from web applications:"}),(0,b.jsx)(t,{samples:[{code:h,label:"JavaScript",language:"js"},{code:p,label:"TypeScript",language:"ts"}]})]})};function L(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var x=g(w());var Y=e=>{let{ClipboardTextArea:t,CodeSamples:a,Typography:o}=y()||{};t||P("ClipboardTextArea",!0),a||P("CodeSamples",!0),o||P("Typography",!0);let c=e.inputs.properties||{},h=()=>Object.entries(c).map(([s,l])=>{let f=l.type==="number"?"0":'""';return`    "${s}": ${f}, # ${l.title||s}`}).join(`
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
${h()}
    }
    
    try:
        result = call_workflow(params, api_key)
        print("Workflow result:", result)
        return result
    except Exception as e:
        print(f"Failed to execute workflow: {e}")

if __name__ == "__main__":
    main()`;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{sx:s=>({...s.typography.headline6}),children:"Python Integration"}),(0,x.jsx)(o,{sx:s=>({marginTop:"4px",color:s.palette.text[400],...s.typography.body}),children:"Make sure you have the requests library installed:"}),(0,x.jsx)(t,{content:"pip install requests",label:"",description:""}),(0,x.jsx)(o,{sx:s=>({marginTop:"16px",color:s.palette.text[400],...s.typography.body}),children:"Then use this code to call your workflow:"}),(0,x.jsx)(a,{samples:[{code:p,label:"Python",language:"js"}]})]})};function P(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var oe=void 0,N=e=>{let{Select:t,Typography:a}=y()||{};t||B("Select",!0),a||B("Typography",!0);let[o,c]=e.useState("generic-agent");function h(p){return p.replace(/(?:^\w|[A-Z]|\b\w)/g,function(s,l){return l===0?s.toLowerCase():s.toUpperCase()}).replace(/\s+/g,"")}return(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"22px"},children:[(0,u.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.modal,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[(0,u.jsx)(a,{sx:p=>({marginBottom:"8px",color:p.palette.text[900]}),children:"Select your agent builder"}),(0,u.jsx)(t,{value:o,onChange:p=>c(p.target.value),options:[{value:"11labs",render:"ElevenLabs"},{value:"claude",render:"Claude Desktop (MCP Server)"},{value:"nodejs",render:"Node.js Fetch Implementation"},{value:"python",render:"Python Requests Implementation"},{value:"web",render:"Web Browser Implementation"},{value:"generic-agent",render:"Default Setup Guide"}]})]}),(0,u.jsx)("div",{style:{marginTop:"16px"}}),(0,u.jsxs)("div",{style:{padding:"24px",backgroundColor:e.theme.palette.elevation.modal,boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.08)",borderRadius:"16px",width:"100%"},children:[o==="claude"&&(0,u.jsx)(j,{flowLabel:h(e.flowLabel??""),...e}),o==="11labs"&&(0,u.jsx)(M,{...e}),o==="generic-agent"&&(0,u.jsx)(O,{...e}),o==="nodejs"&&(0,u.jsx)(F,{...e}),o==="python"&&(0,u.jsx)(Y,{...e}),o==="web"&&(0,u.jsx)(W,{...e})]})]})};function X(e){return(0,u.jsx)(N,{...e})}function U(e={}){let{wrapper:t}={...y(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(X,{...e})}):X(e)}function B(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}return Z(te);})();
;return Component;