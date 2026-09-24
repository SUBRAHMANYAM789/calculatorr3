#!/usr/bin/env bun
/**
 * Calculator Application Entry Point
 */
import { CLI } from './ui/CLI';

async function main() {
  const cli = new CLI();
  await cli.runInteractive();
}

main().catch(console.error);
