---
title: Concept
description: The simplest way to deploy applications to multiple Kubernetes clusters.
---

### Author Information

<div class="avatar">
  <img
    class="avatar__photo"
    src="https://avatars.githubusercontent.com/u/40004716?s=200&v=4"
  />
  <div class="avatar__intro">
    <div class="avatar__name"> Admiralty</div>
    <small class="avatar__subtitle">https://admiralty.io</small>
  </div>
</div>
<br />

Admiralty is a system of Kubernetes controllers that intelligently schedules workloads across clusters. It is simple to use and simple to integrate with other tools. It enables many multi-cluster, multi-region, multi-cloud, and hybrid (simply put, global computing) use cases:

<ul style={{columns: 2}}>
<li>high availability,</li>
<li>active-active disaster recovery,</li>
<li>dynamic content delivery networks (dCDNs),</li>
<li>distributed workflows,</li>
<li>edge computing, Internet of Things (IoT), 5G,</li>
<li>central access control and auditing,</li>
<li>blue/green cluster upgrades,</li>
<li>cluster abstraction (clusters as cattle),</li>
<li>resource federation (including global research platforms),</li>
<li>cloud bursting,</li>
<li>cloud arbitrage...</li>
</ul>

In a nutshell, here's how Admiralty works:

1. Install Admiralty in each cluster that you want to federate. Configure clusters as sources and/or targets to build a centralized or decentralized topology.
2. Annotate any pod or pod template (e.g., of a Deployment, Job, or [Argo](https://argoproj.github.io/projects/argo) Workflow, among others) in any source cluster with `multicluster.admiralty.io/elect=""`.
3. Admiralty mutates the elected pods into _proxy pods_ scheduled on [virtual-kubelet](https://virtual-kubelet.io/) nodes representing target clusters, and creates _delegate pods_ in the remote clusters (actually running the containers).
4. Pod dependencies (config maps and secrets) and dependents (services and ingresses) "follow" delegate pods, i.e., they are copied as needed to target clusters.
5. A feedback loop updates the statuses and annotations of the proxy pods to reflect the statuses and annotations of the delegate pods.
6. `kubectl logs` and `kubectl exec` work as expected.
7. Integrate with Admiralty Cloud/Enterprise, [Cilium](https://cilium.io/blog/2019/03/12/clustermesh/) and other third-party solutions to enable north-south and east-west networking across clusters.

:::note Open Source and Admiralty Cloud/Enterprise
This documentation covers both the Admiralty open source cluster agent and Admiralty Cloud/Enterprise. Features only available with Admiralty Cloud/Enterprise are clearly marked; in that case, as much as possible, open source and commercial third-party alternatives are discussed.
:::
