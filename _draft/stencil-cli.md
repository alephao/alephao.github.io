---
layout: post
title: Generating Swift Code from a Data Source with Stencil CLI
tags: [swift, tooling, stencil, cli, sourcery, swiftgen, gyb, code generation]
categories: [post]
---

### The Problem

In a previous company I worked in, we decided consolidate the event tracking on all platforms. To do that, we created a YAML file describing all events we wanted track. The description of an event would look similar to this:

```yaml
user_sign_up_completed:
  name: User Sign Up Completed
  category: User
  description: An event that fires when the user account is created.
  event_specific_parameters:
  - parameter_name: authentication_method
    description: Authentication method used
    type: string
    allowed:
      - Facebook
      - Google
      - Email
      - Apple
```

In the iOS platform, to track this event, we would write the following code:

```swift
let event = TrackingEvent.userSignUpCompleted(authenticationMethod: .email)
eventTracker.track(event)
```

Imagine this was the `TrackingEvent` code:

```swift
struct TrackingEvent {
  let name: String
  let category: String
  let params: [String: String]
}
```

And imagine this was how we create an `user_sign_up_completed` event:

```swift
extension TrackingEvent {
  enum UserSignUpCompletedAuthenticationMethod: String {
    case facebook = "Facebook"
    case google = "Google"
    case email = "Email"
    case apple = "Apple"
  }

  func userSignUpCompleted(authenticationMethod: UserSignUpCompletedAuthenticationMethod) -> TrackingEvent {
    TrackingEvent(
      name: "User Sign Up Completed",
      category: "User",
      params: [
        "authentication_method": authenticationMethod.rawValue
      ]
    )
  }
}
```

Now imagine that the YAML file has hundreds of events. What if the teams are constantly updating this file by adding, removing, or changing an event? Keeping the codebase synced with the YAML file becomes an impossible task if you're doing it manually.

As we tried to manually add events to the codeabse, we quickly found out that it wasn't scalable, so we turned to code generation. On the iOS platform, we were already writing [Stencil](https://github.com/stencilproject/Stencil) templates for [SwiftGen](https://github.com/SwiftGen/SwiftGen) and [Sourcery](https://github.com/krzysztofzablocki/Sourcery), so it's just natural that we would prefer to use Stencil for this task.

Initially, I thought we could just pass the YAML file and the stencil template to a command line tool and we would get our new file, but that wasn't the case. Since Stencil is a library, we actually need to assemble a program and use it as a dependency.

### Stencil CLI

After going through this, I assembled a small CLI tool to do exactly that. You can pass a YAML or a JSON file plus a stencil template, and it will generate the file. To render a template you can use the following command:

```
stencil render -t path/to/template.stencil -d path/to/datasource.yaml -o path/to/output.swift
```

You can find the installation instructions in the GitHub repo: https://github.com/alephao/Stencil-CLI

### Final Words

I hope this tool can be helpful to you if you ever need to generate code from a data source. If you have any suggestions, please feel free to contribute by opening an issue or a pull-request.

If you need to generate code from a data-source, but Stencil CLI doesn't fit your needs, check out [GYB](https://nshipster.com/swift-gyb/#generating-code-derived-from-data).

Thanks for reading!