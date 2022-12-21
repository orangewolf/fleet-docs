"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2651],{6828:(e,t,a)=>{a.d(t,{d:()=>l});const l={"v0.5":{fleet:"https://github.com/rancher/fleet/releases/download/v0.5.0/fleet-0.5.0.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.5.0/fleet-agent-0.5.0.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.5.0/fleet-crd-0.5.0.tgz"},next:{fleet:"https://github.com/rancher/fleet/releases/download/v0.6.0-alpha2/fleet-0.6.0-alpha2.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.6.0-alpha2/fleet-agent-0.6.0-alpha2.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.6.0-alpha2/fleet-crd-0.6.0-alpha2.tgz"}}},2257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var l=a(7462),n=(a(7294),a(3905)),s=a(6828),r=a(814);const o={},i="Quick Start",c={unversionedId:"quickstart",id:"quickstart",title:"Quick Start",description:"Who needs documentation, lets just run this thing!",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/next/quickstart",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/quickstart.md",tags:[],version:"current",lastUpdatedAt:1671622015,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/next/"},next:{title:"Core Concepts",permalink:"/next/concepts"}},d={},p=[{value:"Install",id:"install",level:2},{value:"Add a Git Repo to watch",id:"add-a-git-repo-to-watch",level:2},{value:"Get Status",id:"get-status",level:2}],u={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-start"},"Quick Start"),(0,n.kt)("p",null,"Who needs documentation, lets just run this thing!"),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"Get helm if you don't have it.  Helm 3 is just a CLI and won't do bad insecure\nthings to your cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"brew install helm\n")),(0,n.kt)("p",null,"Install the Fleet Helm charts (there's two because we separate out CRDs for ultimate flexibility.)"),(0,n.kt)(r.Z,{language:"bash",mdxType:"CodeBlock"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet-crd"," ",s.d.next.fleetCRD,"\nhelm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet"," ",s.d.next.fleet),(0,n.kt)("h2",{id:"add-a-git-repo-to-watch"},"Add a Git Repo to watch"),(0,n.kt)("p",null,"Change ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.repo")," to your git repo of choice.  Kubernetes manifest files that should\nbe deployed should be in ",(0,n.kt)("inlineCode",{parentName:"p"},"/manifests")," in your repo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'cat > example.yaml << "EOF"\napiVersion: fleet.cattle.io/v1alpha1\nkind: GitRepo\nmetadata:\n  name: sample\n  # This namespace is special and auto-wired to deploy to the local cluster\n  namespace: fleet-local\nspec:\n  # Everything from this repo will be ran in this cluster. You trust me right?\n  repo: "https://github.com/rancher/fleet-examples"\n  paths:\n  - simple\nEOF\n\nkubectl apply -f example.yaml\n')),(0,n.kt)("h2",{id:"get-status"},"Get Status"),(0,n.kt)("p",null,"Get status of what fleet is doing"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n fleet-local get fleet\n")),(0,n.kt)("p",null,"You should see something like this get created in your cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get deploy frontend\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NAME       READY   UP-TO-DATE   AVAILABLE   AGE\nfrontend   3/3     3            3           116m\n")),(0,n.kt)("p",null,"Enjoy and read the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.github.io/fleet"},"docs"),"."))}h.isMDXComponent=!0}}]);