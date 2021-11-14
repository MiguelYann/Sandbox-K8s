# Sandbox-K8s

This repository is about playing with few K8s.

## How to play 

### Prequesites

You must have some prerequistes to play with resources created:

  * <br style="color: green">Install Cluster K8s</b>(You highly recommand [Minikube](https://kubernetes.io/fr/docs/setup/learning-environment/minikube/))
  * <br style="color: green">Kubectl</b>

### How to launch

You should follow these steps:

#### Clone repository
```sh
git clone https://github.com/MiguelYann/Sandbox-K8s.git
```

#### Structure application

Application follow theses structures:

```sh
├── README.md
├── deployments
│   ├── README.md
│   ├── deployment.first-nginx.yaml
│   └── deployment.second-nginx.yaml
├── pods
│   ├── pod.creation.nginx.yml
│   └── pod.creation.node.yml
└── services
    ├── service.first-clusterip.yaml
    ├── service.loadbalancer.yaml
    ├── service.nodeport.yaml
    └── service.second-clusterip.yaml
```

* Create deployments

```sh
kubectl apply -f ./deployments/
```

* Create Services

```sh
kubectl apply -f ./services/
```


#### View deployment

Actual pods are base on ``nginx:alpine`` image, with K8s services. We have create Loadbalancer's service type that can allow you to access pod from any HTTP Client.

Just go on your local computer to ``http://localhost:8080/``