"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[444],{1901:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={title:"Kube-Visibility",description:"Prometheus Operator deployment GitOps friendly"},l="kube-visibility",p={unversionedId:"GitOps/kube-visibility",id:"GitOps/kube-visibility",isDocsHomePage:!1,title:"Kube-Visibility",description:"Prometheus Operator deployment GitOps friendly",source:"@site/docs/GitOps/kube-visibility.md",sourceDirName:"GitOps",slug:"/GitOps/kube-visibility",permalink:"/docs/GitOps/kube-visibility",editUrl:"https://github.com/metaCluster/metaDocs/edit/master/website/docs/GitOps/kube-visibility.md",version:"current",frontMatter:{title:"Kube-Visibility",description:"Prometheus Operator deployment GitOps friendly"},sidebar:"tutorialSidebar",previous:{title:"Multi-Cluster Topologies",permalink:"/docs/Federation/Admirality/topologies"}},u=[{value:"Author Information",id:"author-information",children:[]},{value:"Components of this bundle",id:"components-of-this-bundle",children:[]},{value:"Kubernetes version supported",id:"kubernetes-version-supported",children:[]},{value:"Project Layout Structure",id:"project-layout-structure",children:[]},{value:"Customization and packager tool",id:"customization-and-packager-tool",children:[]},{value:"How to Install",id:"how-to-install",children:[]},{value:"Try it on minikube",id:"try-it-on-minikube",children:[{value:"minikube setting",id:"minikube-setting",children:[]},{value:"Download and Apply",id:"download-and-apply",children:[]},{value:"Once installed, access to graphical tools",id:"once-installed-access-to-graphical-tools",children:[]}]},{value:"Development / Contributing",id:"development--contributing",children:[]},{value:"License",id:"license",children:[]}],k={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kube-visibility"},"kube-visibility"),(0,r.kt)("h3",{id:"author-information"},"Author Information"),(0,r.kt)("div",{class:"avatar"},(0,r.kt)("img",{class:"avatar__photo",src:"https://avatars.githubusercontent.com/u/1197820?v=4"}),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Christian Gonz\xe1lez Di Antonio"),(0,r.kt)("small",{class:"avatar__subtitle"},"Head of Cloud @aizon"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"This project was inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/coreos/kube-prometheus"},"kube-prometheus")," bundle but instead of using ",(0,r.kt)("a",{parentName:"p",href:"https://jsonnet.org/"},"jsonnet")," for the customization and configuration, it uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"kustomize")," to overlay the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/"},"Kubernetes manifests")," and ",(0,r.kt)("a",{parentName:"p",href:"https://googlecontainertools.github.io/kpt/"},"kpt")," to distribute it as a package."),(0,r.kt)("p",null,"Also, this is ",(0,r.kt)("a",{parentName:"p",href:"https://www.weave.works/technologies/gitops/"},"GitOps")," friendly."),(0,r.kt)("h2",{id:"components-of-this-bundle"},"Components of this bundle"),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/slashdevops/kube-visibility/blob/master/pkg"},"kpt package")," will install the following software list into your Kubernetes cluster"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Project"),(0,r.kt)("th",{parentName:"tr",align:null},"License"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-monitoring/kubernetes-mixin"},"kubernetes-mixin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-monitoring/kubernetes-mixin/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/kube-state-metrics"},"kube-state-metrics")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/kube-state-metrics/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/prometheus/node_exporter"},"node_exporter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/prometheus/node_exporter/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/coreos/prometheus-operator"},"prometheus-operator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/DirectXMan12/k8s-prometheus-adapter"},"k8s-prometheus-adapter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/DirectXMan12/k8s-prometheus-adapter/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/brancz/kube-rbac-proxy"},"kube-rbac-proxy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/brancz/kube-rbac-proxy/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/introduction/overview/"},"prometheus")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/prometheus/prometheus/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/alerting/alertmanager/"},"alertmanager")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/prometheus/alertmanager/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://grafana.com/"},"grafana")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/grafana/grafana/blob/master/LICENSE"},"Apache License 2.0"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTES"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-monitoring/kubernetes-mixin"},"kubernetes-mixin")," provides some prometheus rules and dashboards.")),(0,r.kt)("p",null,"Used Tools"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Project"),(0,r.kt)("th",{parentName:"tr",align:null},"License"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://googlecontainertools.github.io/kpt/"},"kpt")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/GoogleContainerTools/kpt/blob/master/LICENSE"},"Apache License 2.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kubernetes-sigs.github.io/kustomize/"},"kustomize")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/kustomize/blob/master/LICENSE"},"Apache License 2.0"))))),(0,r.kt)("h2",{id:"kubernetes-version-supported"},"Kubernetes version supported"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">= 1.18.x"))),(0,r.kt)("h2",{id:"project-layout-structure"},"Project Layout Structure"),(0,r.kt)("p",null,"The layout structure for this project is simple, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/slashdevops/kube-visibility/tree/master/pkg"},"pkg folder")," contains the ",(0,r.kt)("a",{parentName:"p",href:"https://googlecontainertools.github.io/kpt/guides/producer/blueprint/"},"kpt blueprint")," implementation of kube-visibility, which is separate from the root of git project intentionally to avoid unnecessary files into the package when you install it using ",(0,r.kt)("a",{parentName:"p",href:"https://googlecontainertools.github.io/kpt/guides/consumer/get/"},"kpt pkg get")," command.\nThe root folder could contain additional docs, examples, and CI/CD pipeline definitions."),(0,r.kt)("h2",{id:"customization-and-packager-tool"},"Customization and packager tool"),(0,r.kt)("p",null,"The heart of this project are these two tools, so if you want to contribute with it you need to understand and manage it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes-sigs.github.io/kustomize/"},"kustomize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://googlecontainertools.github.io/kpt/"},"kpt"))),(0,r.kt)("p",null,"and of course, it is was possible thanks to the big and great idea of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/coreos/kube-prometheus"},"kube-prometheus project"),"."),(0,r.kt)("h2",{id:"how-to-install"},"How to Install"),(0,r.kt)("p",null,"To install this ",(0,r.kt)("a",{parentName:"p",href:"https://googlecontainertools.github.io/kpt/"},"kpt package")," you just need to know about ",(0,r.kt)("a",{parentName:"p",href:"https://googlecontainertools.github.io/kpt/guides/consumer/"},"KPT Package Consumers\n"),", but in short:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kpt pkg get https://github.com/slashdevops/kube-visibility/pkg@master kube-visibility\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:"),"  Remember the ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg folder")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"git path")),(0,r.kt)("h2",{id:"try-it-on-minikube"},"Try it on minikube"),(0,r.kt)("p",null,"Looks inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/slashdevops/kube-visibility/tree/master/HowTos"},"HowTos folder")," for more detailed information about how to prepare minikube"),(0,r.kt)("h3",{id:"minikube-setting"},"minikube setting"),(0,r.kt)("p",null,"MacOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube delete\nminikube config set memory 6144\nminikube config set cpus 2\nminikube config set disk-size 40G\nminikube config set vm-driver docker\nminikube config set kubernetes-version 1.18.9\nminikube config view\n\nminikube start\n\nminikube status\n")),(0,r.kt)("p",null,"Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# set\nminikube config set memory 6144 # > much better\nminikube config set cpus 2      # > much better\nminikube config set disk-size 40G\nminikube config set vm-driver kvm2 # for linux, for MacOS see HowTos/ folder\nminikube config set kubernetes-version 1.18.9\nminikube config view\n\n# start\nminikube start\n\n# check\nminikube status\n\n")),(0,r.kt)("p",null,"Install kubernetes dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# OPTIONAL, EXECUTE IT IN DIFFERENT TERMINAL\n# I recommended it to see what is happening inside your cluster\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml\nkubectl create clusterrolebinding cluster-admin-binding --clusterrole=cluster-admin --serviceaccount=kube-system:default\nkubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep default | awk '{print $1}')\nkubectl proxy\n# then, open the following link in your browser: http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy\n")),(0,r.kt)("h3",{id:"download-and-apply"},"Download and Apply"),(0,r.kt)("p",null,"Download and install the ",(0,r.kt)("inlineCode",{parentName:"p"},"kpt pkg")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"master branch")," or the specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"release tag"),", more information here ",(0,r.kt)("a",{parentName:"p",href:"https://googlecontainertools.github.io/kpt/reference/pkg/get/"},"Command Reference / pkg / get")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"kpt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap GoogleContainerTools/kpt https://github.com/GoogleContainerTools/kpt.git\nbrew install kpt\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-visibility")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir k8s-workspace\ncd k8s-workspace/\nkpt pkg get https://github.com/slashdevops/kube-visibility/pkg@master kube-visibility\n\n# OPTIONAL, using git\ngit init .\ngit add .\ngit commit -am \"added kube-visibility tool\"\n\n# OPTIONAL, using kpt live\nkpt live init kube-visibility/\n\n# OPTIONAL, list available kpt setters\nkpt cfg list-setters kube-visibility/\n\n# OPTIONAL, change one setter\nkpt cfg set kube-visibility/ alertmanager.resources-limits-cpu 120m\n\n# INSTALL, install kube-visibility manifests\n# WORKAROUND, until kpt avoid problems with json and yaml files that not are part of k8s 'kind'\n# Apply the manifest bundle to the cluster\n# NOTE 1: the first time you execute this command some errors appears at the end, wait until\n# prometheus-operator is up before apply again! (see the NOTE below).\n# to see it, use the command 'kubectl get pod --all-namespaces' or just see in the kubernetes-dashboard (step above)\n# NOTE 2: The second time you apply this command, they are take to long, because depending prometheus CRDs are big!\nkustomize build kube-visibility/instance | kubectl apply -f -\n\n# OPTIONAL, depend on 'kpt live init'\n# kpt live apply kube-visibility/ --reconcile-timeout=10m\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:"),"  The bundle of manifest generated with kustomize has some dependencies with\neach other (prometheus depends on prometheus-operator and needs that it was created first), so when you\nexecute the first time the manifest, some errors will occur.\nAfter the first execution you need to wait until some resources were created, and then you can execute\nagain the command to create the resources into the k8s cluster.\nIf you are using the kubernetes-dashboard you can watch when the first execution finished creating\nthe resources, and then you can execute it again to finish with the installation.")),(0,r.kt)("h3",{id:"once-installed-access-to-graphical-tools"},"Once installed, access to graphical tools"),(0,r.kt)("p",null,"All these tools are accessible (using the method described below) when you follow the instructions described in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/slashdevops/kube-visibility/tree/master/HowTos"},"HowTos folder")," for minikube"),(0,r.kt)("h4",{id:"kubernetes-dashboard"},"kubernetes Dashboard"),(0,r.kt)("p",null,"Reference: ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.2.0/aio/deploy/recommended.yaml\n")),(0,r.kt)("p",null,"Create a RoleBinding to ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system namespace default ServiceAccount")," to access to the dashboard as ClusterAdmin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create clusterrolebinding cluster-admin-binding --clusterrole=cluster-admin --serviceaccount=kube-system:default\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# get the token\nkubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep default | awk '{print $1}')\n\n# Execute it in a different terminal\nkubectl proxy\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy"},"Kubernetes Dashboard")," --\x3e ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy")),(0,r.kt)("h4",{id:"prometheus-dashboard"},"Prometheus Dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Execute it in a different terminal\nkubectl --namespace kube-visibility port-forward svc/prometheus-visibility 9090\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9090"},"prometheus")," --\x3e ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9090"},"http://localhost:9090")),(0,r.kt)("h4",{id:"alertmanager-dashboard"},"Alertmanager Dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Execute it in a different terminal\nkubectl --namespace kube-visibility port-forward svc/alertmanager-visibility 9093\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link:")," ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9093"},"alertmanager")," --\x3e ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9093"},"http://localhost:9093")),(0,r.kt)("h4",{id:"grafana-dashboard"},"Grafana Dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Execute it in a different terminal\nkubectl --namespace kube-visibility port-forward svc/grafana 3000\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link:"),"  ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"grafana")," --\x3e ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"user:")," admin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password:")," admin")),(0,r.kt)("h2",{id:"development--contributing"},"Development / Contributing"),(0,r.kt)("p",null,"WIP, but at least"),(0,r.kt)("p",null,"If you want to contribute to this project do the following"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo"},"Fork the project")),(0,r.kt)("li",{parentName:"ul"},"Clone the Forked repository"),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"custom branch")," or work on ",(0,r.kt)("inlineCode",{parentName:"li"},"develop branch")),(0,r.kt)("li",{parentName:"ul"},"Create your custom ",(0,r.kt)("inlineCode",{parentName:"li"},"manifests/modifiers")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"grafana dashboard")," or fix some bug what did you find"),(0,r.kt)("li",{parentName:"ul"},"Merge and push your changes to the ",(0,r.kt)("inlineCode",{parentName:"li"},"custom branch")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"develop")," branch in your forked repository"),(0,r.kt)("li",{parentName:"ul"},"Create a Pull Request to official project ",(0,r.kt)("inlineCode",{parentName:"li"},"develop")," branch"),(0,r.kt)("li",{parentName:"ul"},"Wait until your ",(0,r.kt)("inlineCode",{parentName:"li"},"PR")," to be approved and merged to the ",(0,r.kt)("inlineCode",{parentName:"li"},"master branch"))),(0,r.kt)("p",null,"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo"},"Fork a repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork"},"Creating a pull request from a fork"))),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"This module is released under the Apache License Version 2:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/licenses/LICENSE-2.0"},"https://www.apache.org/licenses/LICENSE-2.0"))))}m.isMDXComponent=!0}}]);