# CA674 Cheat Sheet -> David O'Regan

## Fundimentals

### *Cloud* -> `The term cloud is used as a metaphor for the Internet, based on how the Internet is depicted in computer network diagrams and is an abstraction for the complex infrastructure it conceals.`

+ `Cloud`: A network that delivers requested virtual resources as a service.
+ `Hosting` refers to fixed, dedicated resources.
+ `Web hosting` refers to hosted and dedicated web applications and web content.
+ `SaaS` are shared applications accessed as a service (more on this in a later unit).
+ `PaaS` refers to platform provided as a service (more on this in a later unit)
+ `IaaS` is infrastructure provided as a service (as well....more on this in a later unit)
+ `Infrastructure utility` is industrialized computing resources (or those resources that have been commoditized).
+ `Web applications` are provider dedicated web applications and web content.

### Key characteristics of cloud computing

+ On-demand self-service
  + Focuses on delivering IT services driven by user requests
  + No human interaction with the cloud provider
  + Cloud computing provides a means of delivering computing services that make the underlying technology, beyond the user device, almost invisible
+ Ubiquitous network access
  + Focuses on delivering IT services anytime, anywhere, and through user-chosen devices
  + Users accessing services via Internet technologies expect a secure, `always-on` computing infrastructure that delivers as easily and reliably as electricity from a wall outlet
+ Pool of virtualized resources
  + Focuses on delivering IT services through resource pools that can expand and contract based on the requirements of the underlying workload and the usage characteristics
+ Utility-based pricing
  + Focuses on delivering IT services that can be metered for usage and charged for (if needed) through pricing models including subscription, usage pricing
  + Service level agreements (SLAs)

### Why use cloud

+ Better capital utilization
  + Pay-as-you-go
  + The unit cost of on-demand capacity may be higher than the unit cost per time unit of fixed capacity; offset by no charge when capacity is not being used
+ Accelerate software development, deployment, and testing
  + Fast provisioning of resources
+ Elasticity of resources
  + Scalable and flexible use of resources
+ Access to complex infrastructure and resources without internal resources
+ Support for geographically distributed users
+ New business opportunities

### How clouds are changing IT

+ Changing the economics of IT:
  + Cloud computing is driving operational efficiencies in IT through better use of resources.
+ Automating service delivery:
  + The term self service means that developers and testers can directly procure the resources they need to complete their tasks without going through lengthy procurement chains. This results in a significantly shortened procurement period, and it means that developers and testers can quickly get to the task at hand.
+ Exploiting standardization:
  + Access to clouds is through standard Internet transports and protocols, providing access to a range of user devices.
+ Rapidly deploying new capabilities:
  + Test and operation teams may have different conventions and configurations from development teams, and this can lead to unintended application behavior and delays.

### Driving factors towards cloud computing

+ Poorly utilized resources driving up hardware and labor costs
  + Setting up a new environment is expensive; there is an incentive to hold on to them `just in case`
  + Each new project requisitions new hardware instead of recycling unused hardware; this takes time and money
+ Takes too long to create middleware infrastructures
  + Average lead time to get a new application environment is 4+6 weeks
  + Approvals, procurement, shipment, hardware installation, license procurement, OS installation, configuration, application installation
+ Creating middleware infrastructures is a manual process and error prone
  + Minor differences in configurations can introduce errors or bugs that are difficult to detect
  + Often only emerge when moving from test to production

+ Each application must be sized to support peak load
  + Idle resources during non-peak times
+ Inability to use idle resources to handle extra load
  + Quality of service may suffer during periods of exceptional load

### Concerns related to cloud computing

+ Maturity
  + Is the technology ready for production-level deployment?
+ Standards
  + Still being developed
+ Security concerns
  + Multiple customers sharing the same resources
+ Interoperability
  + Many different vendor APIs
+ Control of data
  + Organizational level of comfort with data being outside traditional IT

### Public clouds (commercial)

+ AWS
+ Google
+ Azure

### Elasticity and scalability

+ Elasticity is the ability to expand or shrink a computing resource in real time, based on the user’s computing requirements
  + The ability to scale
  + Sometimes referred to as `right-sizing`
+ Cloud service providers provide services based on usage
+ This usage must meet service level agreements (SLA) while minimizing cost
+ Elasticity and scalability are used to achieve this
  + Cloud services scale up to meet demand
  + Cloud services scale down when higher demand is not required
  + Customers only pay for services used
+ An example of when elasticity is valuable is during load testing

### Virtualization

+ Virtualization involves a shift in thinking from physical to logical
  + Treating IT resources as logical resources rather than separate physical resources
+ With virtualization, you can consolidate the following resources into a virtual environment:
  + Processors
  + Storage
  + Networks
+ With virtualization, one physical resource can be made to look like multiple virtual resources
  + Virtual resources can have functions or features that are not available in their underlying physical resources

#### What can be virtualized

+ Virtualization may refer to:
  + Hardware
  + Networks
  + Storage
  + Operating systems
  + Applications
  + Desktop
  + Data
+ **Software becomes decoupled from hardware**

#### Characteristics of virtualization

+ Partitioning
  + Run multiple application and operating systems in a single physical machine by partitioning the available resources
+ Isolation
  + Virtual machines are completely isolated from hosts and other virtual machines
+ Encapsulations
  + Encapsulate the entire state of a virtual machine in hardware-independent files

#### Benefits of virtualization

+ Consolidation to reduce hardware cost
  + Enables you to have a single server function as multiple virtual servers
+ Optimization of workloads
  + Can increase the use of existing resources by enabling dynamic sharing of resource pools
+ IT flexibility and responsiveness
  + Enables you to have a single, consolidated view of, and easy access to, all available resources in the network, regardless of location

### Hypervisors

+ Virtualization software that allow multiple operating systems to run on the same computer concurrently
+ Use a thin layer of code in software or firmware to achieve finegrained, dynamic resource sharing
+ Provide the greatest level of flexibility in how virtual resources are defined and managed
+ Primary technology of choice for system virtualization
+ May mediate access to:
  + Memory
  + Data storage,
  + Processing capacity
  + Network connections
+ An example of a hypervisor is VMware ESX

### Provisioning and deprovisioning

+ Provisioning provides resources availability to users and software
  + A provisioning system controls applications available to users
  + And controls servers resources available to applications
+ Deprovisioning provides resources reduction to users and software, while deallocating back-end resources
  + Hardware
  + Software
+ Self-service provisioning allows customers to request the amount of computer services without going through a lengthy process.
  + Computing
  + Storage
  + Software
  + Process
  + Other resources
+ Eliminates many time delays

### Multitenancy

+ Cloud services must enable multitenancy — different companies sharing the same underlying resources
+ Software as a service modes of multitenancy:
  + Simple multitenancy — each customer has his own resources, which are segregated from other customers
  + This form of multitenancy is relatively inefficient
  + Fine grain multitenancy — all resources are shared, but the customer data and access capabilities are segregated within the application
  + This form of multitenancy is much more efficient offering superior economies of scale
+ Platform as a service modes of multitenancy:
  + This delivery model architecture allows multiple customers to run their copy separately from other customers through virtualization
  + Each customers code is isolated from each other
+ The key technical challenge of multitenancy is how to support multiple client organizations from shared instances of the software solution

### Application programming interfaces (API)

+ Cloud services should have standardized application programming interfaces (API)
+ The interface defines how two or more applications and data sources can communicate with each other
  + Multiple applications communicating
  + Multiple data sources communicating
+ The cloud API allows customers (companies) infrastructure or application to plug into the cloud
+ Currently, different cloud vendors are developing different APIs
+ Cloud APIs have not been standardized yet
  + Beware of vendor API lock-in
  + API integration may include SOAP and REST APIs

### Billing and metering of services

+ To calculate the customer charge, cloud usage is tracked via metered services
  + The billing service is automated
  + Customer should be able to monitor usage
+ Billing services normally track:
  + Number of users
  + Capacity used
  + Services leveraged
+ Metered services normally provide:
  + A dashboard providing insight into application and services running in the cloud
  + SLA being met in the cloud

### Economies of scale

+ Economies of scale refers to the cost advantages that an IT organization obtains due to expansion
  + The average cost per unit decreases as the scale of output increases
  + Reductions in unit cost as the size of a facility and the usage levels of other inputs increase
  + The more computer resources being used, the cheaper the price per resource
+ Cloud computing economies of scale promises to dramatically reduce the cost of computing over time and inevitably lead to greater adoption of the technology

### Management: Governance

+ Governance is the process of applying policies relating to using services
+ Governance normally contains the principles and rules in which an organization should act
  + This includes automatic and manual processes, and the procedures for implementing these processes
+ Cloud governance is the shared responsibility between the user of the cloud services and the cloud provider
  + Understanding the boundaries of the user and cloud is critical to ensuring success

### Governance: Risk list

#### Considerations when moving into a cloud environment include

+ Audit and compliance risk as to data access control, data jurisdiction, and maintaining an audit trail
+ Billing risks: ensuring the cloud provider has a solid process to ensure accurate billing
+ Contract risks: what if the cloud provider goes out of business?
+ Security risks: data confidentiality, data integrity, and privacy
+ Information risks: protection of intellectual property
+ Interoperability risks: multiple services must interoperate
+ Performance and availability risk: are service levels being met and key performance indicators being maintained?

### Management: Desktops in the cloud

+ In a virtualized desktop (desktop in the cloud), the applications, data, files, and graphics are separate from the physical desktop and stored in the data center (the cloud)
+ The most widely-used approach is virtual desktop infrastructure (VDI):
  + The virtual client is created on the server
  + Users have what appears to be a complete client desktop with access to all applications, data, and files, but they are actually just a virtual session on the server
  + However, the graphics are being sent to the client

### Management: Managing devices in the cloud

+ Managing assets
  + Establish a detailed hardware asset register: a record itemizing all hardware assets
  + Establish a software register: a record itemizing all software assets
  + Control software licensee: track all software licenses
  + Manage device costs: retire unused devices
+ Monitoring services
  + Application monitoring
  + Clarify service level agreements
  + Automated client backup
  + Remote management and maintenance
  + Client recovery
  + Failure analysis
+ Change management
  + Hardware provisioning
  + Software distribution and upgrade
  + Patch management
  + Configuration management
+ Security
  + Secure access control
  + Identity management
  + Integrated threat management
  + Automated security policy

### Tooling

+ Tooling should aid application development, packaging, and deployment in a way that makes the finished project portable across multiple cloud infrastructures
+ Tools can assist with:
  + Allocation of physical resources, internal and external
  + Asset management
  + Resource virtualization
+ Tools should guide users through the physical makeup of the cloud based on the expected demand characteristics of the system

### Automation

+ Automation is required for:
  + Scale and speed of deployment
  + Dynamics of the environment
  + Cost of deployment
+ Automation goes hand-in-hand with virtualization
  + A cloud environment implies dynamic scaling based on demand
  + Implementing a manual process for this is too time consuming
  + Applications are structured in `independent blocks` that can be easily added or removed
  + Implementing virtualization assists with automation
  + Automation realizes the value of virtualization: dynamic scaling
+ Service automation used for security:
  + An automated way to analyze and manage security flows and processes in support of security compliance audits
  + Reporting any events which violate security policies or customer licensing issues

### Security

+ Cloud computing presents an added level of risk because essential services are often outsourced to a third party
  + The externalized aspect of outsourcing makes it harder to maintain data integrity and privacy, support data and service availability, and demonstrate compliance
+ Cloud computing shifts much of the control over data and operations from the client organization to its cloud provider
  + Clients must establish a trust relationship with the providers and understand the risks
  + A trust but verify relationship is critical
  + Security areas to focus on include:
  + Recognizing security risks
  + Carrying out required security tasks
  + Managing user identity
  + Using detection and forensics programs
  + Encrypting data
  + Creating a security plan

### Cloud service models

+ Software as a service (SaaS)
  + Use of software or applications that are delivered via a network
+ Platform as a service (PaaS)
  + The middleware platform and solution stack are accessible on the cloud
+ Infrastructure as a service (IaaS)
  + Provision servers, storage, and networking resources
+ **To be considered a `cloud service model` these models must be deployed on top of an infrastructure that has the key characteristics of clouds**

#### Infrastructure as a service (IaaS) architecture

+ An infrastructure provider (IP) makes an entire computing infrastructure available `as a service`
+ IPs manage a large pool of computing resources and use virtualization to assign and dynamically resize the resources required by customers
+ Customers rent processing capacity, memory, data storage, and networking resources that are provisioned over a network

#### Platform as a service (PaaS) architecture

+ Service provider (SP) supplies the software platform or middleware where the applications run
+ Service user is responsible for the creation, updating, and maintenance of the application
+ The sizing of the hardware required for the execution of the software is made in a transparent manner
+ Google App Engine is an example of PaaS

##### Platform as a service (PaaS) patterns

+ Patterns are reusable elements that solve recurring business problems
+ Pattern-based middleware is optimized for automatically assembling software components into dynamic middleware services

#### Software as a service (SaaS) architecture

+ Service provider (SP) is responsible for the creation, updating, and maintenance of software and application

#### Cloud deployment models

+ The National Institute of Standards and Technology (NIST) defines four cloud deployment types:
+ `Public cloud`
  + Service provider lets clients access the cloud via the Internet
  + Made available to the general public or a wide industry group
+ `Private cloud`
  + The cloud infrastructure is used solely by the organization that owns it
  + May reside in-house or off premises
+ `Hybrid cloud`
  + Composed of two or more clouds (private, public, or community) that remain unique entities, but that can interoperate using standard or proprietary protocols
+ `Community cloud`
  + Shared by several organizations that have a common mission

### Public Clouds

+ `Multitenant infrastructure`
+ `Anyone may use`
+ `Functions vary`
+ `Fee arrangements vary`

### Private Clouds

+ `Secure, dedicated infrastructure`
+ `User buys or leases the cloud`

### Hybrid Clouds

+ Allows applications and data to flow across clouds
+ Requires interoperability, visibility, and management
+ Supports a very flexible performance model

### Community Cloud

+ Used and controlled by a group of organizations with a shared interest
+ Private cloud purchased by a single user to support a community of users
+ Fees may be charged to subsidiaries
+ Functions vary
+ Common functions
  + Computer ower
  + Storage
  + Elasticity
  + Community-wide sharing of data and applications


### Vertical && Special Clouds

+ Vertical clouds
  + Clouds for particular industries
  + May contain information, applications, services for that industry
+ Horizontal clouds
  + Clouds for a purpose
  + Examples: development, test, collaboration, budgeting
+ Regional clouds
  + Localized
  + Compliant to government regulations

### Selection criteria for cloud deployment types

#### Private

+ Provides a dedicated and secure infrastructure
+ Limited by the organization’s physical hardware and other resources
+ Can be run off premises by a third-party infrastructure provider
+ Does not require federated identity, location awareness, common APIs

#### Public

+ Low cost data storage and disaster recovery solution
+ Expertise is provided
+ Easy access to public domain applications and storage such as Google Apps, Google Docs, and Gmail
+ Issues switching cloud providers

#### Community

+ Shared infrastructure or hosted by a third-party
+ Shared costs
+ Shared mission, policy and compliance
+ Requires commitment from all parties

#### Hybrid

+ Using services of vendors on private clouds costs money
+ Consider moving some systems to an off-premises data center with applications offered back as a service
+ Heightened security concerns

### Security Concerns

## Core Tech

## Advancaed Tech
