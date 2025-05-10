---
title: Introduction 
description: An introduction to shadow testing.
---

## What is Shadow Testing? 

Shadow testing is when you quietly run a new version of a system in parallel with the current one, but without exposing it to real users yet.

## Why do I need it?

Conventional software testing methodologies—such as unit testing, integration testing, functional testing, and acceptance testing, cover a wide range of scenarios and offer a substantial level of confidence. Nonetheless, these methods often fall short in replicating the full complexity of real-world interactions. Many edge cases and unpredictable combinations remain untested, leaving room for critical failures. For organizations that cannot afford such risks, an additional layer of assurance is essential.

## How do I do it?

Shadow testing involves running a new version of a system in parallel with the existing one, without exposing it to end users. This technique allows teams to safely test significant changes in a live environment, capturing real-time data and behavior without impacting actual users. By comparing the outputs of both versions under the same conditions, discrepancies and regressions can be identified and addressed proactively.