// src/types/text-readability.d.ts

declare module 'text-readability' {
   export function fleschReadingEase(text: string): number;
   export function fleschKincaidGrade(text: string): number;
   export function colemanLiauIndex(text: string): number;
   export function automatedReadabilityIndex(text: string): number;
   export function daleChallReadabilityScore(text: string): number;
   export function difficultWords(text: string): number;
   export function linsearWriteFormula(text: string): number;
   export function gunningFog(text: string): number;
   export function textStandard(text: string): string;
 }
 
 