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

#### Principal security dangers to cloud computing

+ Nonstandard and vulnerable APIs
+ Internal security breaches
+ Data corruption or loss
+ User account and service hijacking

#### Virtualization and multitenancy

+ Cloud offers take advantage of economics of scale, offering shared services within their infrastructure
+ Virtualization and multitenancy architectures make this possible
+ However, these technologies were not designed with strong isolation in place
  + Hypervisors have extended these risks, potentially exposing the operating system
  + Creating an environment where attackers can gain access at the operating system level (hypervisors) and higher level services (functionality and data)
+ To reduce these risks, consider:
  + Implement operating system security best practices, such as patch management
  + Implement application systems security best practices, such as AAA (authentication, authorization, and auditing)

#### Nonstandard and vulnerable APIs

+ Application programming interfaces (API) are the software interfaces that cloud providers offer, allowing customers access into their services
+ Cloud API are not standardized, forcing users of multiple cloud providers to maintain multiprogramming interfaces, increasing complexity and security risk
+ Since an API offers access to the internals of a system, a weak API exposes consumers to a variety of security issues encompassing all of the operational exposure the of the compromised API’s functionality
+ To reduce these risks, consider:
  + Implement API security best practices, such as requiring AAA (authentication, authorization, and auditing)
  + Review the cloud provider’s security model being used for the API, including any API trusted chain

#### Internal security breaches

+ The IT industry has well documented that over 70% of security violations are internal
  + This threat is amplified in cloud computing as both IT providers and consumers are under a single management domain
+ To reduce these risks, consider the following key components of the contractual agreement between the customer and cloud provider:
  + Transparency in information and internal management practices
  + Understand the human resources requirements
  + Have a clear level of escalation and notification of a breach
  + Ensure that contractually you are in the loop if an internal breach occurs with the cloud provider (with your data or another customer’s)

#### Data corruption or loss

+ Data corruption or loss is amplified since the cloud provider is the source for a companies data, not the company itself
+ These operational characteristics of the cloud environment, at the PaaS and SaaS layers, amplify the threat of data loss or leakage increase
+ To reduce these risks, consider:
  + Implement application systems security best practices, such as AAA (authentication, authorization, and auditing)
  + Implement strong encryption, SSL, digital signatures, and certificate practices
  + Ensure that strong disaster recovery processes exist and are tested on a periodic basis
  + Require that the persistent medium used to store your data is erased prior to releasing it back into the pool

#### User account and service hijacking

+ User account and service hijacking occurs when a attacker obtains your cloud services information and uses it to take over your cloud access
+ If attackers gain access to a cloud user’s credentials, they can eavesdrop on activities and transactions, manipulate or steal data, return falsified data, and redirect clients to illegitimate sites
+ To reduce these risks consider:
  + Implement security best practices, including human processes, such as strong passwords, two-factor authentication, and prohibiting the sharing of users’ credentials
  + Implement application systems security best practices, such as AAA (authentication, authorization, and auditing)
  + Implement strong encryption, SSL, digital signatures, and certificate practices
  + Ensure that auditing and logging is being used to monitor activities

#### Reducing cloud security breaches

+ The following steps offer a guideline to reducing cloud security breaches:
  + Implement security best practices including human processes
  + Implement operating system security best practices, such as patch management
  + Implement application and API systems security best practices
  + Implement strong encryption, SSL, digital signatures and certificate practices
  + Ensure that auditing and logging are being used to monitor activities
  + Ensure that strong disaster recovery process exist
  + Transparency in information and internal management practice
  + Understand the human resources requirements
  + Have a clear level of escalation and notification of a breach, ensuring that you are in the loop if an internal breach occurs with the cloud provider (with your data or another customer’s)
+ Some import products can significantly contribute to security
  + Identity management
  + Detection and forensics
  + Data encryption

### Identity management

+ Identity management is a broad administrative area that deals with identifying individuals in a system and controlling access to the resources in that system by placing restrictions on the established identities of the individuals
+ Identity management is particularly important in a cloud environment since the cloud is sharing and virtualizing physical resource across many internal (and often external) users
  + Controlled access to different services is critical
+ Identify management helps prevent security breaches and assists companies in meeting IT security compliance regulations

#### Benefits of identity management

+ Improved user productivity — productivity improvement comes from simplifying the interface
+ Improved customer and partner services — customers and partners benefit from a more streamlined, secure process when accessing application data
+ Reduced help desk costs — helps desks normally receive few “password reset” calls when an identity manage process is implemented
+ Reduced IT costs — identity management enables automatic provisioning (providing and revoking user rights)

#### Aspects of identity management

+ Centrally locate the data — establishing a common database or directory is generally the first step to gaining control of identity data
+ Integrating — identity management systems must effectively integrate with other systems
+ Strengthen authentication — requiring stronger authentication measures, such as fingerprints, handprints, iris verification, identity tokens, and stronger password parameters
+ Provisioning — when systems are linked to an identity system, provisioning can be automated, such as revoking or granting employee access rights
+ Single sign-on — all systems communication with the identity management, system allowing the user to sign on once in anorganization
+ Security administration — administration is reduced due to automation
+ Analyzing data — centralized data can produce reports more easily

#### Detection and forensics

+ Activity logs — log files provide information but are costly in space
+ Host-based intrusion protection systems (HIPS) and network-based intrusion protection systems (NIPS)
  + System and log-file monitors — software looks for traces of hackers in log files
  + Network intrusion-detection systems (NIDS) — software programs that monitor data packets as they travel through the network
  + Digital deception software — software that deliberately misleads anyone who is attempting to attack the IT network
  + White-listing software — software that inventories valid executable programs running on a computer and prevents other executables from running
  + Unified threat management — analyzing combined information for threats
+ Fooling attackers by spoofing
  + Spoofing — pretending to be something else, such as IP address, email accounts
  + Honey pot — system that pretends to be something else (something of value) that tricks attackers into revealing details about where they are attacking from
+ Data audit — logging who looks at the data (Sarbanes-Oxley, SOX)

### Encrypting data

+ Encryption is a critical component of cloud computing which is used to ensure that data moving from point A to point B with being altered or intercepted
+ The journey from point A to point B may include:
  + Within the cloud environment (internal to the cloud)
  + The Internet between a corporation (cloud user) and the cloud provider
  + Between multiple clouds (external to the cloud)
+ Encrypting methods
  + Symmetric keys
  + Asymmetric keys
  + Digital signatures
+ Secure Sockets Layer (SSL) addressing cloud client connection issues
  + SSL overview
  + SSL handshake

#### Symmetric key encryption

+ Symmetric or secret key technology is a model in which two parties have a shared secret
+ The same key is used for both encryption and decryption

#### Asymmetric key encryption

+ Public key cryptography
+ Two keys that are cryptographically related:
  + Public key (can share with everyone)
  + Private key (must never be shared; possession is proof)
+ Keys are asymmetric:
  + Given message is encrypted with one key and decrypted with another
  + Symmetric, secret key technology uses same key for encrypt and decrypt

#### What is SSL

+ SSL stands for Secure Sockets Layer
+ Provides connection security through:
  + Communication privacy — the data on the connection can be encrypted
  + Communication integrity — the protocol includes a built-in integrity check
  + Authentication — the client knows who the server is
+ Creates a VPN

## Core Tech

### Cloud Implementation

#### Roles

+ Service provider -> Provides PaaS, IaaS, SaaS
+ Customer -> Buys PaaS, IaaS, SaaS
+ Software provider -> Provides SaaS
+ Service User -> End User

#### Product and Service layers

+ A platform product, e.g. a middleware product, can be deployed over IaaS or over real hardware (non-Cloud Computing scenario)
+ this platform product, if it is designed for that purpose, can be offered as a Service for the application layer;  the application software can be deployed either on top of a Platform Product, or making use of platform services (PaaS);
+ finally, an application software product can eventually be offered as a Service for external customers

#### Useage

##### Application over a platform

`A software provider can develop an application (e.g. a content management system) and publish it so that it can be deployed using some platform software (a web container, a RDBMS…) offered as a service (PaaS).`

##### SaaS over a platform

`A service provider can develop and/or deploy an application (e.g. a billing application) on top of several platform products to offer a service to any external customer that contracts it (SaaS).`

##### Pure platform over IaaS

`A development company can contract several platforms (e.g. a web container, a RDBMS, etc.) to be deployed over an IaaS and use them during their own developments. They can also contract PaaS services (e.g. a DataStore as a service) as part of the development/deployment environment of their applications.`

#### Hello World Senario

+ A software provider (i.e., developer) creates a simple application and makes it available in the cloud platform [follows 4Caast solution architecture].
+ A service provider creates a market offering to sell the above mentioned piece of software, defining the business terms and conditions.
+ A customer can define some options about the deployment of the application and contract it, meaning that they will obtain an instance (a real deployment) of it for their own usage.

##### 4CaaSt Platform

+ The 4CaaSt platform is a PaaS offering
  + optimized and elastic hosting
  + internet-scale, multi-tier applications
+ It uses a blueprint specification to configure the PaaS services in terms of resources needed (cf. AWS AMI configuration)
  + abstract description of an application or service that decouples what they offer from the resources required from the various layers of the Cloud stack

#### Scalability Mechanisms Elasticity in the PaaS Layer

`an initial (single VM) deployment with one platform product and several application components (ACs) .`

#### Scalability Mechanisms

+ Scaling in the PaaS layer:
  + using KPIs from the IaaS layer (CPU usage, free memory, etc.)
  + and also from the PaaS layer (number of transactions per second, number of tenants, etc.).
+ Therefore, this provides PaaS architectural vertical and horizontal scaling
  + by decoupling middleware and components from the virtual machines in which they are hosted and
  + deploying scalable architectures (load balancers, shared/not-shared execution containers, stateless components, replication, etc.)

#### Load Balancing

+ Load balancing is
  + a computer networking methodology
  + to distribute workload across multiple computers or a computer cluster, network links, central processing units, disk drives, or other resources,
  + to achieve optimal resource utilization, maximize throughput, minimize response time, and avoid overload
+ Example: to provide a single Internet service from multiple servers - a server farm
+ Different scheduling algorithms are used by load balancers to determine which backend server to send requests to
  + Simple algorithms include random choice or round robin
  + Cloud load balancers do:
    + SSL termination, session persistence across protocols, node health monitoring, failover protection, DDoS protection
+ Note: a strategy of Grid computing is
  + to use middleware to divide pieces of a program among several computers
  + i.e. do load balancing in a distributed, services-based context

#### Cloud Bursting

+ Cloud bursting is a cloud deployment model
  + an application runs in a private cloud or data center
  + and bursts into a public cloud when the demand for computing capacity spikes.
+ The advantage of this hybrid cloud deployment is
  + an organization only pays for extra compute resources when they are needed.
+ Cloud bursting is usually used for
  + high performance, non-critical applications that handle non-sensitive information.
+ Challenges:
  + Interoperability: different cloud systems -> TOSCA standard
  + Security & Governance: different security and regulatory settings

### Virtualisation

#### OS

+ An operating system (OS) is a collection of software that manages computer hardware resources
+ It provides common services for computer programs:
  + Process management
  + Interrupts
  + Memory management
  + File system
  + Device drivers
  + Networking (TCP/IP, UDP)
  + Security (Process/Memory protection)
  + I/O

#### OS Components

+ Kernel
  + Using firmware (the combination of persistent memory and program code and data stored) and device drivers
+ the kernel provides the most basic level of control over all of the computer's hardware devices:
  + it manages memory access for programs in the RAM
  + it determines which programs get access to which hardware resources,
  + it sets up or resets the CPU's operating states for optimal operation at all times
  + it organizes the data for long-term non-volatile storage with file systems

#### OS Program Execution

+ The operating system provides an interface between an application program and the computer hardware
  + so that an application program can interact with the hardware.
+ The operating system is also a set of services which simplify development and execution of application programs.
+ Executing an application program involves
  + the creation of a process by the operating system kernel which
    + assigns memory space and other resources,
    + establishes a priority for the process in multi-tasking systems,
    + loads program binary code into memory, and
    + initiates execution of the application program which then interacts with the user and with hardware devices.

#### OS Multitasking

+ Multitasking refers to the running of multiple independent computer programs on the same computer.
+ This is generally done via time-sharing, which means that each program uses a share of the computer's time to execute.
+ An operating system kernel contains a piece of software called a scheduler which determines how much time each program will spend executing.
+ Control is passed to a process by the kernel, which allows the program access to the CPU and memory.
+ Later, control is returned to the kernel through some mechanism, so that another program may be allowed to use the CPU.
+ This so-called passing of control between the kernel and applications is called a context switch.

#### Virtualisation OS and Hypervisor

##### Types

1. Hardware -> HyperVisor -> OS
2. Hardware -> OS -> HyperVisor -> OS

##### Example

+ Hypervisors run Virtual Machines (VMs – OS implementations). They are responsible for
  + allocating the resources,
  + providing the interface between the virtual machine (the guest) and the host system
  + providing any management software.
+ The Xen® hypervisor
  + an open source solution for virtualization,
  + Host CPU architecture: offers a feature set for virtualization of x86, x86_64, IA64, ARM, and other CPU architectures.
  + Guest OS: It supports a wide range of guest operating systems including Windows®, Linux®, Solaris®, and various versions of the BSD operating systems

#### Desktop Example

`Virtual Box`

+ `Problem`: Implementing virtualization on x86 CPUs with no hardware virtualization support is a complex task because the CPU architecture was not designed to be virtualized. The problems can be solved, but at the cost of reduced performance.
+ `History`: The x86 instruction set was originally designed in the 1970s and underwent significant changes with the addition of protected mode in the 1980s with the 286 CPU architecture and then again with the Intel 386 and its 32-bit architecture. The 386 did have limited virtualization support for real mode operation, but no support was provided for virtualizing the entire architecture.

+ OS Utilisation: In principle, software virtualization is not overly complex. In addition to the four privilege levels ("rings") provided by the hardware (of which typically only two are used: ring 0 for kernel mode and ring 3 for user mode), one needs to differentiate between "host context" and "guest context".
  + host context: everything is as if no hypervisor was active. This might be the active mode if another application on your host has been scheduled CPU time; in that case, there is a host ring 3 mode and a host ring 0 mode. The hypervisor is not involved.
  + guest context: a virtual machine is active. So long as the guest code is running in ring 3, this is not much of a problem since a hypervisor can set up the page tables properly and run that code natively on the processor. The problems mostly lie in how to intercept what the guest's kernel does.

+ *Full software emulation*
  + usually involving recompilation.
  + That is, all code to be run by the guest is analyzed, transformed into a form which will not allow the guest to either modify or see the true state of the CPU, and only then executed.
  + This process is complex and costly in terms of performance. (VirtualBox has an optional software emulation)

+ *Paravirtualization*
  + only specially modified guest OSes are allowed to run.
  + hardware access is abstracted and any functions which would normally access the hardware or privileged CPU state are passed on to the hypervisor instead.
  + Paravirtualization can achieve good functionality and performance on standard x86 CPUs, but it can only work if the guest OS can actually be modified, which is obviously not always the case.

+ `When starting a VM through its ring-0 support kernel driver, VirtualBox sets up the host`
  + so that it can run most of the guest code natively (without software emulation)
  + also, it has inserted itself at the "bottom" of the list.
+ It can then assume control when needed (if a privileged instruction is executed or external interrupts occur). VirtualBox then
  + either routes a request to a virtual device
  + or possibly delegates handling this to the guest or host OS.
+ *Protection*: there is a protection issue here: VMs can be installed by a customer!

#### Virtual Machine Interoperability OVF

+ Open Virtualization Format (OVF) is an open standard for packaging and distributing virtual appliances or more generally software to be run in virtual machines
+ The OVF standard is not tied to any particular hypervisor or processor architecture.
+ The unit of packaging and distribution is a so called OVF Package which may contain one or more virtual systems each of which can be deployed to a virtual machine
+ Distributed Management Task Force (DMTF) released the OVF Specification V1.1.0 in January, 2010. ANSI has ratified OVF 1.1.0 as ANSI standard INCITS 469-2010
+ Note: OVF VMs can be imported into the VirtualBox hypervisor. Appliances in OVF format can appear as follows in several files:
  + as one or several disk images, typically in the widely-used VMDK format (see Virtualbox/Oracle VDI format) and
  + a textual description file in an XML dialect with an .ovf extension.
  + These files must then reside in the same directory for VirtualBox to be able to import them.

##### OVF Packages – Files and Storage

+ An OVF package consists of several files, placed in one directory.
+ An OVF package always contains exactly one OVF descriptor (a file with extension .ovf).
+ The OVF descriptor is an XML file which describes the packaged virtual machine;
  + it contains the metadata for the OVF package, such as name, hardware requirements, references to the other files in the OVF package and human-readable descriptions.
+ In addition to the OVF descriptor, the OVF package will typically contain
  + one or more disk images (instruction and data), and
  + optionally certificate files and other auxiliary files

##### OVF Utilisation Creation and Installation/Import

+ The creation of an OVF involves the
  + i) packaging of a set of VMs onto a set of virtual disks – a virtual disk image
  + ii) appropriately encoding those virtual disks
  + iii) attaching an OVF descriptor with a specification of the virtual hardware, licensing, and other customization metadata, and
  + iv) optionally digitally signing the package.
+ The process of installing or importing an OVF
  + occurs when a virtualization platform consumes the OVF (e.g. Virtualbox)
  + creates a set of virtual machines from its contents.

##### OVF Installation

+ Installation transforms the virtual machines in an OVF package into the runtime format understood by the target virtualization platform
  + e.g. VirtualBox VBoxSVC-VMM), which runs guest OSs
+ It does the appropriate resource assignments and supported by the correct virtual hardware.
+ During installation, the platform validates the OVF integrity, making sure that the OVF package has not been modified in transit, and checks that it is compatible with the local virtual hardware.
+ It also assigns resources to, and configures the virtual machines for the particular environment on the target virtualization platform. This includes
  + assigning and configuring the (physical and virtual) networks to which the virtual machines must be connected;
  + assigning storage resources for the VMs, including virtual hard disks as well as any transient data sets, connections to clustered or networked storage and the like;
  + configuring CPU and memory resources, and
  + customizing application level properties.

##### OVF Creation

+ Creating an OVF is done by exporting an existing virtual machine from a virtualization platform into an OVF package, and adding to it the relevant meta-data needed to correctly install and execute it.
+ This will transform the virtual machine from its current runtime state on a particular hypervisor into an OVF package.
+ During this process, the virtual machine's disks can be compressed to make it more convenient to distribute.

+ *Portability levels*:
  + A simple export of a virtual machine will typically create an OVF with Level 1 (one virtualisation product) or Level 2 (a family of products) compatibility (tied to a specific set of virtual hardware),
  + however it is easy to extend the metaphor to support the export of Level 3 compatibility (multiple families), for example through the use of utilities such as “sysprep” for Windows.

##### OVF Example

+ The content of an OVF contains 6 sections:
  + ProductSection, which provides product information such as name and vendor of the appliance.
  + PropertySection, which list a set of properties that can be used to customize the appliance. These properties will be configured at installation time of the appliance, typically by prompting the user. This is discussed in more detail below.
+ AnnotationSection, which is a free-form annotation.
+ EulaSection, the licensing terms for the appliance. This is typically shown during install.
+ HardwareSection, which describes the virtual hardware. This is a required section that describes the kind of virtual hardware and set of devices that the virtual machine requires. E.g., a fairly typical set of hardware is specified
+ 500 MB of guest memory,
  + 1 CPU,
  + 1 network interface (NIC), and
  + one virtual disk).
  + The network and disk identifiers from the outer sections are referenced here.
  + OperatingSystemSection, which describes the guest operating system.

##### Remote Access

+ Virtualbox can be remotely operated, i.e. can be used as a cloud service provider (IaaS level)
+ Remote booting via Preboot Execution Environment (PXE)
+ Remote machine display
+ VRDE Virtual Remote Desktop Extension
+ Remote access to any running virtual machine
+ VRDE supports the Remote Desktop protocol (RDP) using the VirtualBox Remote Display Protocol (VRDP)
+ Typically graphics updates and audio are sent from the remote machine to the client,
  + while keyboard and mouse events are sent back
+ Extensible RDP authentication
+ USB over RDP – connect local USB device to remote VM
+ (VRDE needs to be installed separately)

### Cloud Service Managment

#### Amazon EC2 Cloud IaaS

+ Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizeable computing capacity
  + servers in Amazon's data centers
  + can be used use to build and host software systems.
  + access to components and features using a web-based GUI, command line tools, and APIs.

*pay-as-you-go for the capacity that is needed.*

+ *The main components that EC2 provides:*
  + Concerns
  + Amazon Machine Images and Instances
  + Storage
  + Databases
  + Networking and Security
  + Monitoring, Auto Scaling, and Load Balancing
  + AWS Identity and Access Management

#### AMI Machine Image

+ An Amazon Machine Image (AMI) is a template that contains a software configuration (operating system, application server, and applications).
  + an AMI is used to instantiate (create) a virtual machine
  + an AMI is a filesystem image which includes an operating system (e.g., Linux, UNIX, or Windows) and any additional software required to deliver a service
+ From an AMI, instances are launched, which are running copies of the AMI. You can launch multiple instances of an AMI.
+ Instances run until you stop or terminate them, or until they fail. If an instance fails, a new one can be launched.

#### AMI Usage

+ A single AMI or multiple AMIs can be used depending on needs.
+ From a single AMI, you can launch different types of instances. An instance type is a hardware archetype. 
+ As illustrated below, you select a particular instance type based on the amount of memory and computing power you need for the application or software that you plan to run on the instance.
+ Is a kind of configuration of a hardware type – taking expected demands into account

#### Storage and Security

+ *Storage: just one example*
  + Amazon S3 is a supported storage solution.
  + It provides a web service interface that enables to store and retrieve any amount of data from anywhere on the web
+ *Security:*
  + uses security groups to control who can access your instances.
  + These are similar to a network firewall that allows to specify the protocols, ports, and source IP ranges that are allowed to reach AMI instances.
+ One can create multiple security groups and assign different rules to each group.
  + assign each instance to one or more security groups
  + use the rules to determine which traffic is allowed in to the instance.

#### Monitoring, Auto Scaling, and Load Balancing

+ AWS provides several features that enable you to do the following:
+ Monitor basic statistics for your instances and Amazon EBS volumes
  + using the CloudWatch monitoring tool
+ Automatically scale your EC2 capacity up or down according to conditions you define
  + using Auto Scale
+ Automatically distribute incoming application traffic across multiple EC2 instances
  + using Elastic Load Balancing

#### AWS Identity and Access Management

+ Amazon EC2 integrates with AWS Identity and Access Management (IAM):
  + Create users and groups under an organization's AWS account
  + share AWS account resources between the users in the account
  + assign unique security credentials to each user
  + Granularly control users access to services and resources
  + get a single AWS bill for all users under the AWS account
+ For example, use IAM with EC2 to control which users under an AWS account can create AMIs or launch instances.

## Advancaed Tech

### Cloud Monitoring Systems

#### Overview

+ Monitoring is the process of gathering information about infrastructure or a service during run time.
+ In clouds, Monitoring is responsible for collecting, aggregating, storing and propagating events generated in the system.
+ Monitoring of clouds normally lies in the intersection of a plain metering/aggregating mechanism and a more high level, rules based management system, tailored to the specific cloud setting it works in.

#### Requirements of Distributed Systems

+ Scalability
+ Robustness
+ Manageability
+ Portability
+ Overhead
+ Extensibility

#### Requirements of Cloud env

+ Elasticity
+ Migration
+ Adaptability
+ Manageability
+ Federation

### Monitoring Data

+ *Three ways to minitor data in cloud systems*

#### Within the service itself

+ Service specific Key Performance Indicators (KPIs) are used to measure and manage monitoring values specific to the service.
+ These values are normally only available from inside the service software itself, and can be used to perform, e.g., elasticity

#### The hypervisor

+ Data concerning the resource consumption of individual VMs can be obtained by communicating with the VM hypervisor,
+ or by using tools that are capable of operating across several different hypervisors

#### the infrastructure

+ Infrastructure specific measurements illustrate the health and utilization of physical resources.

### Monitoring Infrastructure Overall Architecture

+ Monitoring information provider: it consists of different sources where monitoring data is collected from, as well as the components in charge of collecting them.
+ Managing / Storing of the data: components in charge of managing the data collected from the monitoring information providers and storing them in an aggregated database.
+ Evaluation of the data: components in charge of evaluating the collected data.

### Monitoring IP's

+ `Application / Service Level Monitoring Collector`：
  + this component collects  high level monitoring information from the applications/services that are being executed within the virtual environment,
  + and makes this information available to other components through the shared monitoring system.

#### VIP

*Virtual IT-Infrastructure Monitoring Collector:*
this component collects virtual IT-infrastructure monitoring data (e.g. VM parameters).

*Physical IT-Infrastructure Monitoring Collector:*
this component collects physical IT-infrastructure monitoring data (e.g. network link supervision, computing resources data, storage data etc).

*Energy Efficiency Monitoring Collector:*
the component measures energy use and associated carbon emissions in association with with tasks, resources, usage and other workload parameters in the datacenter. Furthermore, they may vary from datacenter to datacenter and other factors, such as the place, time of day, measurement point, etc.

*Currently, the methodologies for recording and allocating energy and carbon to IT, and to measuring efficiency generally, are very immature.*

+ Evaluation of the Monitoring Data: this assessment component in charge of the evaluation of the monitoring data. It can cover, e.g., risk assessment and SLA evaluation. 
+ SLA evaluation
+ SLA (service-level agreement) is a negotiated agreement between a service provider and its customers, which specifies the contractual obligations
+ The role of the SLA Evaluation is to check the agreed QoS terms of the SLA against the monitoring information coming from the infrastructure.

#### VISION

+ VISION Cloud is an EU-funded research project, which is intended to “introduce a powerful ICT infrastructure for reliable and effective delivery of data-intensive storage services, facilitating the convergence of ICT, media and telecommunications. This infrastructure will support the setup and deployment of data and storage services on demand, at competitive costs, across disparate administrative domains, while providing QoS (Quality of Service) and security guarantees.”
+ VISION Cloud provides an innovative solution in area of storage systems: content centric, aligned with industry standards, preventing vendor lock-in
+ The infrastructure of the VISION Cloud consists of multiple data centers, each of which may have one or more storage clusters containing physical compute, storage and networking resources.
+ Monitoring of  VISION Cloud is responsible for the collecting, aggregating, storing and propagating events generated into the VISION Cloud, both at the cluster level.

### Cluster Level Monitoring

+ The cluster level monitoring component is composed of  three major modules:
  + Probes & Probes Scheduler
  + Event Generation Library
  + Cleanup Daemon

### Metrics

+ *Metrics* is defined by name, namespace, dimensions, time stamp and a unit of measure (optionally)
+ Namespaces are conceptual containers for metrics.
+ Metrics in different namespaces are isolated from each other.
+ Namespaces are strings which contains: the alphanumeric characters "0-9A-Za-z" plus "."(period), "-" (hyphen), "_" (underscore), "/" (slash), "#" (hash), and ":" (colon).
+ Dimensions are the name/value pairs to identify metrics, and can be viewed as categories for metrics’ characteristics.
+ Up to 10 dimensions can be assigned to a metric.
+ Dimension on EC2 instance
+ *Timestamps:* each metric has to be marked with a time stamp which can be up to 2 weeks in the past and up to 1day in the future.
+ By default, CloudWatch creates a time stamp based on the time the data element was received.
+ Timestamps are recommended to be specified in Coordinated Universal Time (UTC), and all times of the statistics from CloudWatch are specified in UTC.
+ *Unites* represent statistic’s unit of measure.
+ Common unit including: seconds, bytes, bits, percent, count, bytes/second (bytes per second), bits/second (bits per second), count/second (counts per second), and none (default when no unit is specified)

### Accounting and billing

+ *Two major payment models used in clouds: prepaid and postpaid*

#### Prepaid & Postpaid Models

+ In postpaid model, the consumption cost of both event-based and session-based resources are calculated in a similar manner
+ Contrarily, in prepaid model, the consumption of event-based and session-based resources can be charged in different manners

#### IETF Accounting Model

+ Internet Engineering Task Force (IETF) “develops and promotes Internet standards, cooperating closely with the W3C and ISO/IEC standards bodies and dealing in particular with standards of the Internet protocol suite”.
+ The working group of IETF that handle accounting-related issues is the  authentication, authorization, and accounting (AAA).
+ `RADIUS (Remote Authentication Dial In User Service)` is a network protocol to provide centralized AAA services to users, which is applied between a RADIUS server and a RADIUS client.
+ Besides the basic configuration, a RADIUS server can also act as a proxy server by forwarding the requests it receives to another RADIUS server.
+ Diameter is successor of the RADIUS which is intended to offer more reliable and secure management of access to network based on AAA concept.

#### 3GPP

+ The 3rd Generation Partnership Project (3GPP) “unites 6 telecommunications standard development organizations `(ARIB, ATIS, CCSA, ETSI, TTA, TTC), known as “Organizational Partners” and provides their members with a stable environment to produce the highly successful Reports and Specifications that define 3GPP technologies”`.
+ 3GPP defines two architecture, one for “off-line charging” (postpaid) and one for “on-line charging” (prepaid).

#### Billing Approach

+ Flat fee and “pay-per-use” approaches
+ Flat fee approach simplifies the billing system but
+ It means no incentive for the customers to use resources in a responsible way.
+ Price setting in today’s turbulent telecommunication/cloud market is often used as a tool in the competitive struggle.
+ Collection of charging data yields an important information source regarding customer behavior.
+ “Pay-per-use” also referred as “Pay-as-you-go”, the most commonly used one in clouds,  allow the customer pays for the amount of processing power, disk space, network traffic. 
+ It creates a new way to organize cloud business that enables the creation of a rich ecosystem where all parties can draw significant benefits.

#### Price Setting

+ In the “Pay-per-use” approach, the cost of the delivered service can be based on:
+ Duration
+ Volume
+ Quality of Service (QoS)
+ Time Interval
+ Commercial Relationships between Multiple Providers

#### RESERVOIR

+ Resource and Service Virtualization without Barriers `(RESERVOIR)` is a research project partly funded by the European Union, focused on federation of clouds at the infrastructural level.
+ The federated cloud approach is one way to solve the limited interoperability.
+ The accounting and billing solution offered by `RESERVOIR` in federated cloud infrastructures are carried out in a fair and standardized way between the user (service provider) and the infrastructure owner.
+ The Virtual Execution Environment (VEE) is used to denote the isolated environment where customer applications are executed and maintained.
+ The different layers of the `RESERVOIR` architecture are:
+ `Service Manager:` Components at this layer are concerned with services as a whole rather than the specific VEEs that make up a service. The accounting and billing system is included in this layer.
+ `VEE Manager:`  Components at the VEE Manager (VEEM) layer are responsible for interacting with the SM and VEEH at the local site, but also horizontally with the VEEMs of other sites.
+ `VEE Host:`  The VEE Hosts (VEEHs) are responsible for  running and monitoring each single VEE.

## Exam Papers

### 2017

#### Q2 FUNDAMENTALS

##### Q2 A

Provide a definition for Cloud Computing. Discuss whether your definition capture a wide range of offerings of Cloud Computing and whether it still differentiates Cloud from other technologies and platforms.

```js

Cloud Computing: Using a network of remote servers, hosted on the internet to store/manage and process data rather than doing it on a local machine.

Definition capture a wide range of offerings of Cloud Computing?

Not complelely, cloud comptuing offers much more than simply storing and managing data. In todays world, cloud computing offers a wide variaty of services such as TaaS, PaaS, SaaS, and IaaS. Within these services are even more offered capabilities from machine learning to API construction.


Whether it still differentiates Cloud from other technologies and platforms: Typically, local platforms or machines offer single service ideals where with cloud computing, you can make use of virtuization to enable any service you need, when you need it.
```

##### Q2 B

In cloud computing the layer Infrastructure as a Service (IaaS), Platform as a Service (PaaS) and Software as a Service (SaaS) are distinguished.

• Provide definitions for each layer
• Provide a concrete example of a product or service offered for each of the layers
• Describe briefly another “as a Service “ layer offering that you are familiar with.

```js
1. Provide definitions for each layer

PaaS: Used to provide cloud components to software, allowing for development and hosting of software.

IaaS: Self service model for accessing, monitoring and managing remote datacenter infestructures.

SaaS: Third party vendors delivering applications to a client via the internet, usually running directly on a web broswer with little to no downloads or confgiuration needed via a client.

2. Provide a concrete example of a product or service offered for each of the layers

PaaS: Google App Engine.

IaaS: Amazong web service.

SaaS: VSWare.

3. Describe briefly another as a Service layer offering that you are familiar with

TaaS -> Testing as a service, offered by companies like loadimpact.com, which allow the client to create and run tests against their software using the TaaS platform, rather than needing to run them on a local machine. This saves both time and money, allowing users instant access to a testing framwork that they do not need to build or maintain.
```

##### Q2 C

Develop a migration scenario of a software company that wants to move its software development activities and product development to the cloud.

Consider:
• Expected benefits
• Proposed solution architecture
• Proposed Migration process

```js
Use Case: VSWare

VSWare is a software company that provides schooling software to secondary schools in Ireland via a webapp. Teacher, students and parents all make use of the application via a application used through a web broswer.

VSWare typically sees very high traffic through the weekdays and low traffic on the weekends. Traffic usually peaks around 7 - 12AM in the morning due to students checking for their timetables and teachers taking attendance.

The website is currently hosted on dedicated infrastructure at the company’s headquarters.

Application Architecture:

Using a standard 3-tier application architecture, the company deploys a frontend hardware-based load balancer, which manages traffic across two Apache web servers each running on a separate physical box.

The applications runs behind a fore wall(DMZ) and uses standard encyrption(SSL). The backend logic is written in Java, which uses Tomcat as the application container. The front end logic is handled via JavaScript after accessing API end points provided by the Java layer. The database layer is MYSQL and consists of one master SQL server and two slave servers.

Motivation for Migration:

1. The company wants to scale, taking on colleges aswell and realises on site installations are too expensive.
2. The company wants to reduce managements costs by implementing CI and automated deployment procedures across its application.
3. The company wants to be able to provide faster iterations of releases through a CI process.

Expected benefits:

1. Automated deployments, one click deployment to production via developer CI, self healing on failed production deployments.
2. Reduction of cost through bith hardware reduction and time required for manual deployments, installation.
3. Increased uptime through dedicated hosting.
4. Autosacling.
5. AUtomated testing on deployment.

Proposed solution architecture:

During the technical assessment, they discovered that the entire VSWare technology stack was compatible with AWS and could run on Amazon EC2 Instances with Linux. They also discovered that the web app can be configured to run at peak capacity (7 Servers) during high traffic periods, medium capacity (4 Servers) on weekdays and low capacity (2 Servers) on weekends.

The IT Security team was able to get a complete SAS 70 Type II audit report from AWS and they were able to review security best practices.


Proposed Migration process:

1. Proof of concept:

The web development team were intally scheptical about the relational database migration. In order to test this they created a proof of concept application.

The proof of concept gave the team a chance to evaluate the AWS console, understand how to configure EC2 image instances, how to set up Amazon RD2 DB insatnces, how to store and retirve Amazon S3 objects and how to set up elastic load balanacers.

They were able to import their own data set using the standard amazon SQL import tool and perform metric testing using Amazon cloud watch.

The team then created migration scripts for the database and held a demo at their office to demonstrate how the migration would take place and what it would mean for everyone on the team.

2. Actual Migration

Using the *hybrid migration strategy*.

During the migration phase, the collocation infrastructure was not deprecated immediately.

The configuration of the on premsise load balancer was modified to send requests to the new instances in the cloud. For a short duration, the load balanacer was rotuing traffic to both the cloud servers and physical servers.

Once it was confirmed that the cloud servers were performing at the required levels, the physical servers were taken down, one at a time.

The load balancers were updated and 100% of the web traffic was now being served by the EC2 insatnces running on the cloud.

After testing was complete, the DNS was switched to point at the cloud based web servers and the application was fully migrated to the AWS cloud.
```

#### Q3

##### 3(A) Different types of virtualisation architectures can be distinguished. Name the two main types and explain how they operate

```js
1. Bare Metal Or Type 1 hypervisor.

This type of hypervisor is installed directly onto the server/machine and then the OS layers are installed onto the hyervisior. type 1 offer superior performance as they can be tuned for the hardware they are installed on. This also offers increased security and availablity. 

2. Hosted hypervisior.

Type 2 are hosted on an exisiting OS(VirtualBox). They have a number of advantages compared to the type 1. The most important benifit being that you do not need to reboot the machine to lanuch a new VM. These additional VM's can be launched from inside the hypervisor and run as an additonal piece of software. The drawback to the Type 2 is performance, it trade speed for flexibility. 
```

##### 3(B) Describe a hypervisor architecture. You can choose an application context such as desktop virtualisation and common solutions that support this

+ Use a diagram to outline the overall architecture, i.e. the organisation and connections of the main components.
+ Briefly describe the main components, i.e. what their main functions are. Not all individual components need to be named and explained here, but the components can be grouped based on their primary function. These functions should be named.
+ Explain how these components interact if a VM command for the guest context needs to be executed in a host environment

```js
1. Diagram

     Host           Host            Host              Guest        Guest            Guest
X86 HardWare - > Host OS -> VBoxSVC(HyperVisor) -> VM1/VM2 -> Virtual Box GUI -> Client

2. Briefly describe the main components

IPRT: Portable runtime libary for file abstraction, string manipulation, threading etc. When VB accesses host operating features it does so via this libary.
Virtual Machine Manager: Heart of hypervisor
Execution Manager: Control execution of guest code
Recompiled Execution Manager: Provides software emulation of CPU instructions
Trap Manager: Intercepts and processes guest trap exceptions
Hardware acceleration manager: Provide support for hardware platforms
Pluggable device manager: Abstract interface between the VMM and emulated devices
Page manager: Controls guest paging
Patch manager: Patchs guest code to speed up virtulization
Time manager: Handles time aspects inside guest
Config manager: Handles VM config
Saved state manager: Saves and loads VM states
Virtual USB: Seperates emulated usb from host usb
Debug facility: A debug tool for the VM

3. Interaction

Uses the IPRT libary to access the host operating features.
```

##### Q3 C Elasticity and scalability are the key benefits of cloud-based solutions. Load balancing and cloud bursting are two specific techniques to achieve elasticity and scalability in a cloud setting. Using a pool of (private and public) resources as a reference, explain how these techniques work

```js
1. Load Balancing: Load balancing allows organizations to distribute traffic accross multiple backend destinations, including delooyments onto public and private clouds i.e. Microservices.

2. Cloud Bursting: Deployment model where an application runs in a private cloud and bursts into a public cloud when the demand for computing capacity spikes.

An advantage of this hybrid model is that it allows the user to only pay for the extra computing assets they use.

Experts recommend cloud burting for non-critical, high performance, non-sentive data holding applications, which in turn leaves free rescoruces for mission critical applications.

Cloud burting works best for applications that dont depend on complex applcation delivery infrastructure, or habd intergration with other components.
```

#### Q4

##### Q4(A) IaaS providers enable their customers to utilise a computing environment. How would a customer create, configure and use such a service using Java or Python as the development language. You can use Amazon EC2 (or a similar system – open- source or commercial) to illustrate your answer

```js
As a customer I want to create a Java application on GCE(IaaS).

To do this I will be using the following compoents of the google platform:

Google Compute Engine
Google Cloud Storage
Google Cloud Datastore
Google Cloud Logging
Google Cloud Pub/Sub

1. Create cloud storage bucket -> Buckets are the basic containers that hold data in cloud storage.

2. Configure your Java application so it runs on your local machine, we want to make sure everything is working correctly before we deploy it to the GCE.

3. Deploying to a single instance:

Customer Local Machine Running Application -> Deploy App -> [VM ->App][GCE] -> End user accessing application in SaaS format

i) First we push our scource code to the cloud scource repository(note, you can deploy from any scoruce control set up such as gitlab/github or bitbuket) but cloud scource repository is googles native cloud component. Its very convinent to use this repo, as Google's instances will automatically pull the latest repo build during startup, fitting perfectly into our ideal CI pipeline.

ii) Second, we leverage a start up script to init a instance. An instance can have a startup script that is executed whenever the instance is started or restarted.

iii) Third, we want to create and configuring a Compute Engine instance. We do this either via the Google Compute engine dashboard or via their management console using a series of bash commands, here we specify the type of instance we require and the image we want it build from i.e. gcloud compute instances create my-app-instance \ --image-family=debian-8

iv) Next, we want to manage and monitoring our created instance. A user is able to use the Google cloud platform console to monitor and manage their instance. Google cloud logging is automattically configured to gather logs from various common services in our instance, including syslog.

v) Enable horiontal scaling of our instance to meet traffic requirements. We can do this by leveraging a intance group, which is handled by google cloud autoscaler.

A managed instance group is a group of homogeneous instances based on the same instance template. 

To create this group, we use the google comute engine console, first specifiying a template for our instances then a command which states the minium number of running instances we want in our group.

Customer Local Machine Running Application -> Deploy App -> [Instance1 ->App][Instance2 ->App][Instance3 ->App][GCE] -> End user accessing application in SaaS format in a super performant manor

Google compute engine can now automatically create and/or shutdown instance copies as needed. 

We can also set up a HTTP load balancer to distribute incoming HTTP requests to the different instances managed by the instance group.

vi) Creating the load balancer

An individual instance is fine for testing or debugging, but for serving web traffic it's better to use a load balancer to automatically direct traffic to available instances.

We do this using a series of commands in the Google Compute Engine Console. 

vii) Putting it all into a deployment script and linking it with our CI.

Now we create a simple deployment bash script: `deploy.sh` which runs when our proudction or master branch in our repo is updated. This means we not only get a fresh instance version on our instance start/restart but we also get one when new changes are pushed to production. 

viii) Finally, billing

```

##### Q4(B) Cloud services are usually monitored and usage and quality records are kept. Accounting and Billing is one of the data consumers of cloud monitoring services

+ What is the main responsibility of the accounting & billing component in cloud systems?
+ Which are the two major payment models used in clouds?

```js
The billng conponent is responsible for chargin users correctly for the services they make use of in their cloud model. This billing takes place based on the rescorces used by the users i.e. CPU useage, API requests, Storage used. This service is also responsible for creating invocies with blling breakdowns.

Two major payment models used:

1. Prepaid: User pays a pre set price scale, usually permonth for a certain allowance of services.

2. Postpaid: Paid per useage of services at the end of a billable months
```

##### Q4(C) Interoperability is of significant importance for cloud computing. What problems would interoperability address? Discuss OSS (open source software) and standards in this context. Categorise solutions in terms of cloud layers and delivery/deployment models/scenarios

```js
Interoperability is the ability to write code that is supported across a number of cloud providers, as well as the ability to move to a different cloud provider

Problems addressed:

Vendor lock in
Moving between providers is restricted
Lack of standards for interoperability

OOS:

Solutions:

```

### 2016

#### Q2

##### Q2(A) Definitions of Cloud Computing often vary, capturing various technology and business aspects

i. Provide a definition for cloud computing.
ii. Discuss your definition in terms of how comprehensive it is. Is the definition broad enough to capture a wide range of offerings? It is concrete enough to allow cloud computing to be differentiated from other technologies and platforms?

```js

i) Cloud Computing: Making use of a network of servers, hosted on the internet to process, manage and store data instead of doing it on a local machine.


ii) The definition above is abstract enough to capture a wide range of services such as IaaS, PaaS and Saas under the same definition. IaaS provides the consumer with access to fundemntal rescooruces storage, networking and computing power. SasS is also covered as it is on-demand access to software running in the cloud. 

The definition is also concreate enough that cloud computing is not mistake for grid computing. Grid computing involves sharing res between machines in fixed physical locations in order to achomplish a single task.
```

##### Q2(B) In cloud computing, we distinguish the deployment models private, public, hybrid and community

i. Provide definitions for each of these four models.
ii. Describe a concrete application scenario for each of the models and include details of an organisation or a larger IT system to be deployed in the cloud.

```js
i) Private:
+ Used by solely one organization, the one that owns it
+ In house or off premise.
+ Dedicated infrastructure that organization buys or leases.
+ Allows for high level of security

-> Univerity Cloud i.e. DCU

ii) Public:
+ Service provider allows client access cloud via internet
+ Made available to the public or wide industry group
+ Multi-tenant infrastructure

-> DropBox

iii) Hyrbid:
+ Composed of two or more clouds that remain unique entities, but that can interoperate using standard protcalls.
+ Allows applications and data to flow accross cluds
+ Outscource non critical IT while keeping senstive data or critical IT on privatte cloud.

-> Business that seperates open scource code base available to public from private data i.e. emplyee records.

iv) Community:
+ Shared by sevaral organizations that have same goal.
+ Single private cloud shared by community of users.

-> Credit Union: One branch purcahes private cloud and other branches make use of this

```

##### Q2(C) Cloud migration, or also called cloud on-boarding, is the process of moving traditional on-premises software systems, or even full IT systems, into the cloud. This is an endeavour that currently many organisations are considering. Please address the following (both parts carry equal weights)

i. Outline a generic migration process. Keep in mind that this process of migrating IT systems from on-premise installations to the cloud is often complex, involving different actors (with different expectations and concerns) and different activities.
ii. Develop a migration scenario for a software company that wants to move its software development activities and product offerings to the cloud. Note that this clearly targets the PaaS space. Consider the following aspects:

+ expected benefits
+ a solution architecture and how it would be used
+ a migration process

```js

i) Generic Migration Strategy -> Hybrid Migration

1. Pre Migration Discovery
During this stage, all levels of the company are involved with a discovery phase for what cloud set up will fit the needs of the company and address the different concerns for different team members i.e. Do we need a SaaS/PaaS/IaaS? How will the migration of data work? What is the tooling suite like? What does it provide? Is it cheaper than on site installation? Are the virtual machines powerful enough to meet the needs?
2.Pre Migration POC
Before the migration goes ahead, the development team will usually create a POC migration using a test application to ensure that 1) The team has a full understanding of how the cloud software works and can be leveraged correctly and 2) The most important part of the migration(data migration), is indeed possible.
3. Hybrid Migration
During this process, the physical installation will stay live while the traffic is routed to both the physical servers and cloud servers. When we are happy that the cloud server can handle the traffic, we will update the DNS to ensure all content is served via the cloud and the physical servers will be turned off one by one.
4. Migration Finalization
Once we have migrated to the cloud, we can now run the test suite provided by our cloud set up i.e. Amazon Cloud Watch, to ensure our cloud set up is meeting the requirements.


ii) Migration senario

Use Case: VSWare

VSWare -> Secondary schooling software provided to parents,

Motivation to migrate:

1.
2.
3.

Current Arcetecture:

Expected benefits:

Solution architecture and how it would be used:

Migration process:

Migration POC
Actual Migration:

```

#### Q3.1

##### Q3(A) Container technology (for example, the recently successful Docker solution) is based on virtualisation

i. How are containers constructed?
ii. What are the benefits of containers for PaaS clouds?

```js
i)
 
Containers are similar to VMs but function differently: Where a VM virtualizes the hardware, a container virtualizes the OS.

Container: Hardware -> Host OS -> Docker -> [Libs -> App] [Container]
VM: Hardware -> Hypervisor -> [GuestOS -> Libs -> App] [VM]

Containers: An abstraction of the application layer that packages codes and deps together. Multiple containers can run on the same machine and share OS kernal with other containers, each running as a isolated process.

VMs: Abstraction of hardware turing one server into many. Allows multiple VMS to be run on the same machine. Each VM is a full copy of an OS.
```

##### Q3(B) Describe the internal architecture of a hypervisor. You can use the desktop virtualisation tool „VirtualBox‟ (discussed in the lectures) as a concrete example

i. Use a diagram to describe the overall architecture from a high-level perspective, i.e. the organisation in terms of components and their connections. Clearly distinguish guest and host aspects. [10 marks]
ii. Briefly describe the main components, i.e. what their main functions are. Not all individual components need to be named and explained here, but the components can be grouped based on their primary function. These primary functions (as discussed in the lectures) should be named. [10 marks]
iii. Explain how the hypervisor components interact if a VM command for the guest context needs to be executed in a host environment. [5 marks] You can choose a particular virtualisation context such as desktop virtualisation and common solutions that support this.

```js
i) 

ii)

IPRT: portable runtime libary for file abstraction, string manipulation, threading, etc. When VB accesses host features it does so using this libary.

Virtual Machine Manager: The heart of the hypervisior

Execution Manager: Manages excution of guest code

Trap Manager: Manages and processes guest trap/exceptions

Time Manager: Manges all timing aspects of VM.

Page manager: Controls guest paging

Patch manager: Patches guest code to speed up VM

Hardware acceleration manager: Provide support for hardware platforms

Recompile Execution Manager: Provides software emulation of CPU instructions

Virtual USB: Seperate emulated USB from host usb

Plugable device manager: Abstract interface between VMM and emulated devices

Saved state manager: Loads and saves VM states

Debug Facility: Debug facility for VM

iii)

IPRT -> Controls code execution on host from VM.
```

##### Q3(C) Different forms of multi-tenancy have been discussed in the lectures

i. Define each of these different multi-tenancy types.

```js
1. Simple mutli-tenancy: Each customer has dedicated set of rescoruces from other customers. Inefficient.

2. Fine grained multi-tenancy: All rescoruces shared between cusomers. Customer data and access level are segregated.
```

ii. What are their respective advantages and disadvantages?

```js
1. Simple mutli-tenancy: Cheaper but Inefficient.

2. Fine grained multi-tenancy: Much more efficent, offering superiour economies of scale but more expensive.
```

#### Q4.1

##### Q4(A) Q4(a) Cloud consumers usually follow a number of common step in re-deploying their IT systems to the cloud. Describe this deployment process consisting of configuration and management activities

i. Choose an IaaS platform. Start with the relevant components that your solution provides
ii. How would a consumer create, configure and use such a service using Java or Python as the development language. Describe this process by referring to the components used.
Note:

+ The focus in this part is on Infrastructure-as-a-Service (IaaS). The IaaS providers enable cloud consumers to utilise a computing environment.
+ You can use Openstack or Amazon EC2 (or a similar system – open-source or commercial) to illustrate your answer.

```js
```

##### Q4(B) Cloud services are usually subject to some payment model. Thus, these cloud services are usually monitored, metered and usage and quality records are kept. A specific component of a cloud service dealing with accounting and billing is one of the consumers of data provided by a cloud monitoring service

Discuss the following:
i. What is the main responsibility of the Accounting and Billing component in cloud systems? Give a brief definition.

```js

Billing component: A component in a cloud aratecture that is designed to monitor customer rescoruce expenditure and charge the customer accordingly. This component is also responsible for creating invoiced for rescoruce useage and giving an accurate breakdown for a customer to review.
```

ii. Name and describe the two major payment models used in cloud accounting and billing solutions.

```js
Pre-Paid: A set amount of credit* is purchased through the cloud billing component, and used rescoruces are deprecated from this credit allowance. I.e. Google cloud credit.

Post-Paid: Useage is charged the same as above, but instead of spending against credit, your bill accumulates and is paid at a set interval.
```

##### Q4(C) Many cloud application are based on some form of hybrid or multi-cloud architecture using different cloud services. Interoperability is of significant importance for the resulting integration needs of cloud computing

Discuss the following:
i. What specific interoperability problems arise in the cloud?
ii. What solutions to address interoperability problems exist?

+ Discuss open source software (OSS) and standards in this context
+ Categorise solutions in terms of cloud layers and delivery/deployment models/scenarios.

```js

i)


ii)
```

### 2015

#### Q2

##### Q2(A) SOA, Grid, Internet of services. Differenciate them, how do they relate to the cloud

```js

SOA: Serivce orientated aratecture. Architectural style defined by patterns and service composition. SOA's define a set of services thata business wants to expose to others. SOA promotes loose coupling, modularity and flexible design.

Grid: A series of comouters linked together via the internet in order to share resoruces to achimplish a common task.

Internet of services:Web services are software systems designed to support interopabeable machine to machine interaction over a network.
```

##### Q2(B) Cloud computing definition. Talk about cloud in general

##### Q2(C) Benifits of cloud computing. Technical and business

#### Q3

##### Q3(A) Define: Hypervisor, Vm, disk image

##### Q3(B) Explain desktop virtuilization. Talk about what problem it solves and how?

##### Q3(C) Define multi-tenacy, advantages and disadvantages

#### Q4

##### Q4(A) Interoperability, discuss

##### Q4(B) 

##### Q4(C) Monitoring, describe monitoring system, what different kinds of monitoring data are there(3), where do they come from

### MISC Questions

#### QUESTION: Cloud computing benefits [20 marks]

What benefits do organisations expect from cloud computing? Discuss technical as well as business concerns.